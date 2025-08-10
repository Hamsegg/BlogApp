# 📝 BLOG Application (MERN Stack)

## 📌 Overview
The **BLOG Application** is a full-stack web application built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js).  
It allows users to create, read, update, and delete blog posts with authentication features, rich text editing, and responsive UI.

---

## 🚀 Features
- **User Authentication** (Login, Registration, JWT-based authentication)
- **Create Blog Posts** with rich text editor
- **Read, Edit, and Delete** blog posts
- **Image Uploads** for posts
- **Responsive Design** for desktop & mobile
- **Secure API Endpoints** with authentication middleware
- **Pagination & Search** for posts
- **Comment System** for user interaction

---

## 🛠️ Tech Stack
### **Frontend**
- React.js
- React Router
- Axios
- Tailwind CSS / Material UI (if used)

### **Backend**
- Node.js
- Express.js
- MongoDB & Mongoose
- JSON Web Token (JWT) for authentication
- Multer for file uploads

---

## 📂 Project Structure
```
BLOG-Application/
│
├── backend/            # Node.js + Express API
│   ├── config/          # DB & JWT configuration
│   ├── controllers/     # Business logic
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── middleware/      # Authentication & validation
│   └── server.js        # Entry point
│
├── frontend/            # React.js UI
│   ├── public/          # Static files
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── utils/       # Helper functions
│   │   └── App.js       # Root component
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/blog-application.git
cd blog-application
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in the **backend** folder with:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
Run backend server:
```bash
npm run dev
```

### 3️⃣ Frontend Setup
```bash
cd ../frontend
npm install
npm start
```

---

## 🔑 API Endpoints

### **Authentication**
- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Login user

### **Blog Posts**
- `GET /api/posts` – Get all posts
- `GET /api/posts/:id` – Get single post
- `POST /api/posts` – Create post (auth required)
- `PUT /api/posts/:id` – Update post (auth required)
- `DELETE /api/posts/:id` – Delete post (auth required)

---

## 🖼️ Screenshots  
*(Add screenshots of your application UI here)*  

---

## 🤝 Contribution
Feel free to fork this repo and create a pull request if you’d like to contribute.

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 👨‍💻 Author
**Your Name**  
GitHub: [@yourusername](https://github.com/yourusername)
