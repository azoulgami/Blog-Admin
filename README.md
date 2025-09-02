# Blog Web Application (Node.js, Express.js, EJS)

A simple blog web application built with **Node.js**, **Express.js**, and **EJS**.  
This project allows users to create, edit, and delete blog posts. Since no database is used, posts do **not persist between sessions**. The focus of this project is on implementing CRUD functionality and building a clean, responsive user experience.  

Inspired by: [Paul Graham’s Articles](http://www.paulgraham.com/articles.html)  

---

## ✨ Features
- 📝 Create Posts – Users can add new blog posts through a simple form.  
- 📖 View Posts – All posts are displayed on the homepage.  
- ✏️ Edit Posts – Existing posts can be updated.  
- 🗑️ Delete Posts – Posts can be removed with one click.  
- 🎨 Responsive Styling – Clean, mobile-friendly design using CSS (and optional Flexbox/Grid/Bootstrap).  

---

## 🛠️ Tech Stack
- Node.js – JavaScript runtime  
- Express.js – Web framework for routing and middleware  
- EJS – Template engine for rendering dynamic HTML  
- CSS – Custom styling for responsiveness and layout  

---

## 📂 Project Structure
project-root/  
│── views/         # EJS templates  
│── public/        # CSS and static files  
│── routes/        # Express routes (if modularized)  
│── app.js         # Main server file  
│── package.json  

---

## 🚀 Getting Started

1. Clone the repository:  
   git clone https://github.com/your-username/blog-webapp.git  
   cd blog-webapp  

2. Install dependencies:  
   npm install  

3. Run the server:  
   node app.js  
   # or (if using nodemon)  
   npm run dev  

4. Open in your browser:  
   http://localhost:3000  

---

## 📌 Future Improvements
- Add database integration (MongoDB or PostgreSQL) for persistent storage  
- Implement user authentication  
- Add categories/tags for blog posts  
- Deploy to a platform (Heroku, Render, Vercel, etc.)  

---

## 📖 About
This project was built as part of a **Capstone Project** to demonstrate practical skills in backend development, templating engines, and responsive frontend design. It showcases CRUD operations and user experience focus.  
