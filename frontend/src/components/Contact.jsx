import React, { useState } from 'react';
import { Mail, Linkedin, Github, Download } from 'lucide-react';
import { submitContact } from '../utils/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await submitContact(formData);
      setStatus({
        type: 'success',
        message: response.message || 'Message sent successfully!'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadResume = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    
    // Set the href to the resume file in public folder
    link.href = '/Veera_resume.pdf';
    
    // Set the download attribute with desired filename
    link.download = 'Veera_Venkatalakshmi_Resume.pdf';
    
    // Make it open in new tab as fallback
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-purple-300" />,
      label: 'Email',
      value: 'marisearuna@gmail.com',
      href: 'mailto:marisearuna@gmail.com',
      color: 'purple'
    },
    {
      icon: <Linkedin className="w-5 h-5 text-cyan-300" />,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://linkedin.com/in/veera-venkatalakshmi-marise-b5b150306',
      color: 'cyan'
    },
    {
      icon: <Github className="w-5 h-5 text-pink-300" />,
      label: 'GitHub',
      value: 'View my code',
      href: 'https://github.com/Anusha9859',
      color: 'pink'
    }
  ];

  return (
    <section id="contact" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="backdrop-blur-lg bg-white/5 border border-purple-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-purple-300">Contact Info</h3>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`p-3 backdrop-blur-sm bg-${info.color}-500/20 border border-${info.color}-500/30 rounded-lg`}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <a 
                      href={info.href} 
                      target={info.label !== 'Email' ? '_blank' : undefined}
                      rel={info.label !== 'Email' ? 'noopener noreferrer' : undefined}
                      className={`text-white hover:text-${info.color}-300 transition-colors`}
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button 
                onClick={handleDownloadResume}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="backdrop-blur-lg bg-white/5 border border-cyan-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-300">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 backdrop-blur-sm bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 backdrop-blur-sm bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-3 backdrop-blur-sm bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                />
              </div>

              {status.message && (
                <div className={`p-3 rounded-lg ${
                  status.type === 'success' 
                    ? 'bg-green-500/20 border border-green-500/30 text-green-300' 
                    : 'bg-red-500/20 border border-red-500/30 text-red-300'
                }`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        <div className="text-center text-gray-400">
          <p>© 2025 Veera Venkatalakshmi. Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;