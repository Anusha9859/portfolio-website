#!/bin/bash

# Portfolio Project Auto-Setup Script for Mac/Linux

echo "🚀 Setting up Portfolio Website..."

# Create Backend Structure
echo "📁 Creating Backend folders..."
mkdir -p backend/{config,models,routes,controllers,middleware}

# Create Frontend Structure
echo "📁 Creating Frontend folders..."
mkdir -p frontend/public
mkdir -p frontend/src/{components,utils}

# Create Backend Files
echo "📝 Creating Backend files..."

# Backend package.json
cat > backend/package.json << 'EOF'
{
  "name": "portfolio-backend",
  "version": "1.0.0",
  "description": "Backend for portfolio website",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "keywords": ["portfolio", "mern"],
  "author": "Veera Venkatalakshmi",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^8.0.3",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express-validator": "^7.0.1",
    "helmet": "^7.1.0",
    "express-rate-limit": "^7.1.5",
    "@google/generative-ai": "^0.1.3"
  },
  "devDependencies": {
    "nodemon": "^3.0.2"
  }
}
EOF

# Backend .env template
cat > backend/.env << 'EOF'
PORT=5000
MONGODB_URI=your_mongodb_uri_here
GEMINI_API_KEY=your_gemini_api_key_here
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
EOF

# Backend .gitignore
cat > backend/.gitignore << 'EOF'
node_modules/
.env
.env.local
.env.production
*.log
.DS_Store
EOF

# Create Frontend Files
echo "📝 Creating Frontend files..."

# Frontend package.json
cat > frontend/package.json << 'EOF'
{
  "name": "portfolio-frontend",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.1",
    "axios": "^1.6.2"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.4.0",
    "vite": "^5.0.8"
  }
}
EOF

# Frontend .env template
cat > frontend/.env << 'EOF'
VITE_API_URL=http://localhost:5000/api
EOF

# Frontend .gitignore
cat > frontend/.gitignore << 'EOF'
node_modules/
dist/
build/
.env
.env.local
.env.production
.DS_Store
*.log
npm-debug.log*
EOF

# Frontend vite.config.js
cat > frontend/vite.config.js << 'EOF'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
});
EOF

# Frontend tailwind.config.js
cat > frontend/tailwind.config.js << 'EOF'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
EOF

# Frontend postcss.config.js
cat > frontend/postcss.config.js << 'EOF'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

# Create placeholder files
echo "📄 Creating placeholder files..."

# Backend placeholders
touch backend/server.js
touch backend/config/db.js
touch backend/models/Contact.js
touch backend/models/ChatHistory.js
touch backend/routes/contact.js
touch backend/routes/chatbot.js
touch backend/controllers/contactController.js
touch backend/controllers/chatbotController.js
touch backend/middleware/errorHandler.js

# Frontend placeholders
touch frontend/public/index.html
touch frontend/src/App.jsx
touch frontend/src/index.jsx
touch frontend/src/index.css
touch frontend/src/utils/api.js
touch frontend/src/components/Navbar.jsx
touch frontend/src/components/Hero.jsx
touch frontend/src/components/About.jsx
touch frontend/src/components/Skills.jsx
touch frontend/src/components/Projects.jsx
touch frontend/src/components/Experience.jsx
touch frontend/src/components/Contact.jsx
touch frontend/src/components/Chatbot.jsx

# Create README
cat > README.md << 'EOF'
# Portfolio Website - MERN Stack

## Setup Instructions

### Backend
1. cd backend
2. npm install
3. Update .env with your credentials
4. npm run dev

### Frontend
1. cd frontend
2. npm install
3. npm run dev

Visit: http://localhost:5173
EOF

echo "✅ Project structure created successfully!"
echo ""
echo "📋 Next Steps:"
echo "1. Copy code from artifacts into respective files"
echo "2. Update backend/.env with MongoDB URI and Gemini API key"
echo "3. Add your resume.pdf to frontend/public/"
echo "4. Run 'cd backend && npm install' to install backend dependencies"
echo "5. Run 'cd frontend && npm install' to install frontend dependencies"
echo ""
echo "🚀 Happy Coding!"