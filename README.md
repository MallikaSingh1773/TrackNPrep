## 📌 Overview

TrackNPrep is an AI-powered platform designed to help students and professionals practice technical interviews using real-time AI-generated questions, mock interview simulations, and personalized feedback analysis.

It brings together role-based interview preparation, AI mock interviews, and performance tracking — all inside one seamless dashboard.

## ✨ Features

### 🧠 AI-Based Practice Question Generator
- Select role, topics, and experience level
- Generates smart, role-specific questions using Google Gemini
- Save sessions for review and future practice
- Pin important questions

### 🎙️ AI Mock Interview (Webcam + Mic)
- Real-time interview simulation
- Questions are read aloud using Text-to-Speech
- User answers recorded via microphone/webcam
- Gemini AI analyzes answers based on:
  - Fluency
  - Confidence & delivery
  - Technical accuracy
  - Communication clarity

### 📊 AI Insights & Feedback
- Answer-level insights
- Improvement suggestions
- Strengths & weaknesses section
- End-of-interview AI report

### 🖥️ Personalized Dashboard
- View all practice sessions
- View all interview attempts
- Load specific sessions & continue
- Clean, modern UI built using TailwindCSS

## ⚙️ Tech Stack

### Frontend
- React (Vite)
- TailwindCSS
- React Router
- Axios
- Framer Motion
- Lucide Icons

### Backend
- Node.js
- Express.js
- JWT Authentication
- Gemini API Integration
- RESTful APIs

### Database
- MongoDB Atlas
- Mongoose ORM

### Dev Tools
- Postman / Hoppscotch
- Git & GitHub
- VS Code

## 📁 Project Structure

```
TrackNPrep/
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── questionController.js
│   │   ├── interviewController.js
│   │   └── feedbackController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Session.js
│   │   ├── Interview.js
│   │   └── Question.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── questionRoutes.js
│   │   ├── interviewRoutes.js
│   │   └── feedbackRoutes.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorHandler.js
│   ├── config/
│   │   └── db.js
│   ├── utils/
│   │   └── geminiClient.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard/
│   │   │   ├── Interview/
│   │   │   ├── Practice/
│   │   │   └── common/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Practice.jsx
│   │   │   └── MockInterview.jsx
│   │   ├── utils/
│   │   │   ├── api.js
│   │   │   └── auth.js
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── .env.example
│
├── .gitignore
├── README.md
└── LICENSE
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- Google Gemini API key

### 1️⃣ Clone Repository

\`\`\`bash
git clone https://github.com/Nishu-06/TrackNPrep.git
cd TrackNPrep
\`\`\`

### 2️⃣ Backend Setup

\`\`\`bash
cd backend
npm install
\`\`\`

Create a \`.env\` file in the backend directory:

\`\`\`env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_gemini_api_key
NODE_ENV=development
\`\`\`

Start the backend server:

\`\`\`bash
npm run dev
\`\`\`

### 3️⃣ Frontend Setup

\`\`\`bash
cd ../frontend
npm install
\`\`\`

Create a \`.env\` file in the frontend directory:

\`\`\`env
VITE_API_URL=http://localhost:5000/api
\`\`\`

Start the frontend development server:

\`\`\`bash
npm run dev
\`\`\`

### 4️⃣ Access the Application

Open your browser and navigate to:
- Frontend: \`http://localhost:5173\`
- Backend: \`http://localhost:5000\`

## 📝 API Endpoints

### Authentication
- \`POST /api/auth/register\` - Register new user
- \`POST /api/auth/login\` - User login
- \`GET /api/auth/profile\` - Get user profile

### Practice Questions
- \`POST /api/questions/generate\` - Generate AI questions
- \`GET /api/questions/sessions\` - Get all sessions
- \`POST /api/questions/save\` - Save question session
- \`PUT /api/questions/pin/:id\` - Pin/unpin question

### Mock Interviews
- \`POST /api/interviews/start\` - Start mock interview
- \`POST /api/interviews/submit\` - Submit interview answer
- \`GET /api/interviews/history\` - Get interview history
- \`GET /api/interviews/:id/feedback\` - Get AI feedback

## 🎯 Usage

1. **Sign Up/Login**: Create an account or login
2. **Practice Questions**: Select role, topics, and difficulty to generate questions
3. **Mock Interview**: Start a live AI interview with webcam/mic
4. **Review Feedback**: Get detailed AI-powered insights on your performance
5. **Track Progress**: View all past sessions and interviews in your dashboard
