# 🧠 Personalized Health & Wellness companion with Biometric Integration

A **Personalized Health and Wellness Platform** that integrates user health data and generates **AI-driven insights** using the **Google Gemini API**.  
Users can register, fill in their health profile, and get customized **Workout Plans**, **Diet Recommendations**, and **Mindfulness Tips**.

---

## 🚀 Tech Stack

### 🖥️ Frontend
- **React 18 + Vite**
- **Tailwind CSS**
- **Axios** for API communication
- **React Router DOM**
- **JWT-based Authentication**
- **Responsive UI**

### ⚙️ Backend
- **Node.js + Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **Google Generative AI (Gemini API)**
- **JWT Authentication Middleware**
- **CORS Enabled**
- **.env for Environment Variables**

---

## 🌟 Features

✅ **User Authentication**
- Secure Login and Register using JWT  
- Token verification with middleware  

✅ **Health Profile Form**
- Collects data like name, age, height, weight, goal, activity level, sleep, and stress  

✅ **AI Recommendations**
- Generates personalized insights using Gemini API  
- Displays three major categories:
  - Workout Plan  
  - Nutrition Plan  
  - Mindfulness Tips  

✅ **Dynamic Insights**
- Fetches recommendations specific to each user’s health profile  
- Real-time refresh on form submission  

✅ **Admin Ready**
- Extendable to add admin analytics and dashboard  

---

## 🧩 Folder Structure
HealthPlatform/
│
├── Backend/
│ ├── controllers/
│ │ ├── healthProfileController.js
│ │ └── authController.js
│ ├── middleware/
│ │ └── authMiddleware.js
│ ├── models/
│ │ ├── HealthProfile.js
│ │ └── User.js
│ ├── routes/
│ │ ├── healthProfileRoutes.js
│ │ └── authRoutes.js
│ ├── utils/
│ │ └── blackList.js
│ ├── .env
│ └── server.js
│
├── Frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ │ ├── HealthProfileForm.jsx
│ │ │ ├── Insights.jsx
│ │ │ └── LoginRegister.jsx
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── package.json
│ └── tailwind.config.js
│
├── .gitignore
├── README.md
└── package.json
