import { GoogleGenerativeAI } from '@google/generative-ai';
import ChatHistory from '../models/ChatHistory.js';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Portfolio context for AI
const portfolioContext = `
You are an AI assistant for Veera Venkatalakshmi's portfolio website. 
You help visitors learn about:

EDUCATION:
- B.Tech in Computer Science from RGUKT Srikakulam
- CGPA: 9.2/10.0
- Expected graduation: 2025

TECHNICAL SKILLS:
- Frontend: React.js, HTML5, CSS3, JavaScript, Bootstrap
- Backend: Node.js, Express.js, Python
- Databases: MongoDB, MySQL
- AI & Automation: Make.com, n8n, Gemini API, AI Chatbots
- Analytics: Power BI, Excel
- Tools: Git, GitHub, VS Code, Postman

KEY PROJECTS:
1. Real-Time AI Chatbot - MERN stack with Gemini API integration
2. AI Agent Automation Platform - Make.com and n8n workflows
3. MERN Chat Application - WebSocket real-time messaging
4. Business Analytics Dashboard - Power BI and Excel integration

CONTACT:
- Email: marisearuna@gmail.com
- Location: Srikakulam, Andhra Pradesh, India
- Available for internships and full-time positions

Be helpful, professional, and concise. Answer questions about skills, projects, education, and experience.
`;

export const chatWithBot = async (req, res) => {
  try {
    const { message, sessionId } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Message is required'
      });
    }

    // Initialize the model
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // Get or create chat history
    let chatHistory = await ChatHistory.findOne({ sessionId });
    
    if (!chatHistory) {
      chatHistory = await ChatHistory.create({
        sessionId,
        messages: []
      });
    }

    // Build conversation history for context
    const conversationHistory = chatHistory.messages
      .slice(-10) // Last 10 messages for context
      .map(msg => `${msg.role}: ${msg.content}`)
      .join('\n');

    // Create prompt with context
    const prompt = `${portfolioContext}\n\nPrevious conversation:\n${conversationHistory}\n\nUser: ${message}\n\nAssistant:`;

    // Generate response
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const botReply = response.text();

    // Save messages to history
    chatHistory.messages.push(
      { role: 'user', content: message },
      { role: 'assistant', content: botReply }
    );
    await chatHistory.save();

    res.status(200).json({
      success: true,
      data: {
        message: botReply,
        sessionId
      }
    });

  } catch (error) {
    console.error('Chatbot error:', error);
    
    // Fallback response if API fails
    const fallbackResponses = {
      skills: 'I specialize in MERN Stack (MongoDB, Express, React, Node.js), Python, MySQL, and AI automation tools like Make.com and n8n. I also work with Excel, Power BI, and have built real-time AI chatbots!',
      projects: 'My key projects include: Real-time AI Chatbot with Gemini API, AI Agent Automation workflows, MERN Chat Application, and Business Analytics Dashboard.',
      experience: 'I\'m a fresh graduate with 9.2 CGPA from RGUKT Srikakulam. Strong foundation in full-stack development with hands-on projects.',
      contact: 'You can reach me at marisearuna@gmail.com or connect on LinkedIn!'
    };

    const userMessage = req.body.message.toLowerCase();
    let fallbackReply = 'I can help you learn about my skills, projects, experience, and contact information. What would you like to know?';
    
    if (userMessage.includes('skill')) fallbackReply = fallbackResponses.skills;
    else if (userMessage.includes('project')) fallbackReply = fallbackResponses.projects;
    else if (userMessage.includes('experience') || userMessage.includes('education')) fallbackReply = fallbackResponses.experience;
    else if (userMessage.includes('contact')) fallbackReply = fallbackResponses.contact;

    res.status(200).json({
      success: true,
      data: {
        message: fallbackReply,
        sessionId: req.body.sessionId
      }
    });
  }
};