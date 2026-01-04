**TrackNPrep** is an AI-powered interview preparation platform designed to help students and professionals practice technical interviews through real-time AI-generated questions, mock interview simulations, and personalized feedback.

The platform combines role-based interview preparation, AI mock interviews, and performance tracking — all within a single, seamless dashboard.

---

## ✨ Features

### 🧠 AI-Based Practice Question Generator

* Choose role, topics, and experience level
* Generates role-specific interview questions using **Google Gemini**
* Save practice sessions for later review
* Pin important questions for quick access

### 🎙️ AI Mock Interview (Webcam + Mic)

* Real-time interview simulation environment
* Questions delivered via Text-to-Speech
* User responses captured through microphone and webcam
* AI-driven evaluation based on:

  * Fluency
  * Confidence & delivery
  * Technical accuracy
  * Communication clarity

### 📊 AI Insights & Feedback

* Question-level feedback
* Actionable improvement suggestions
* Strengths & weaknesses analysis
* Detailed AI-generated interview report

### 🖥️ Personalized Dashboard

* Access all practice sessions and interview attempts
* Resume previous sessions anytime
* Clean, responsive UI built with TailwindCSS

---

## ⚙️ Tech Stack

### Frontend

* React (Vite)
* TailwindCSS
* React Router
* Axios
* Framer Motion
* Lucide Icons

### Backend

* Node.js
* Express.js
* JWT Authentication
* Google Gemini API
* RESTful APIs

### Database

* MongoDB Atlas
* Mongoose ORM

### Developer Tools

* Git & GitHub
* VS Code
* Postman / Hoppscotch

---

## 📁 Project Structure

```bash
TrackNPrep/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── utils/
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
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

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v16+)
* MongoDB Atlas account
* Google Gemini API key

---

### 1️⃣ Clone Repository

```bash
git clone https://github.com/MallikaSingh1773/TrackNPrep.git
cd TrackNPrep
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file inside `backend/`:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_gemini_api_key
NODE_ENV=development
```

Run backend server:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
```

Create `.env` file inside `frontend/`:

```env
VITE_API_URL=http://localhost:5000/api
```

Run frontend server:

```bash
npm run dev
```

---

### 4️⃣ Access Application

* Frontend: `http://localhost:5173`
* Backend: `http://localhost:5000`

---

## 📝 API Endpoints

### Authentication

* `POST /api/auth/register`
* `POST /api/auth/login`
* `GET /api/auth/profile`

### Practice Questions

* `POST /api/questions/generate`
* `GET /api/questions/sessions`
* `POST /api/questions/save`
* `PUT /api/questions/pin/:id`

### Mock Interviews

* `POST /api/interviews/start`
* `POST /api/interviews/submit`
* `GET /api/interviews/history`
* `GET /api/interviews/:id/feedback`

---

## 🎯 Usage Flow

1. Register or login
2. Generate AI-based practice questions
3. Attempt AI mock interviews
4. Review detailed feedback
5. Track progress via dashboard

