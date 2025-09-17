# Skillex - Learning Management System

Skillex is a modern **Learning Management System (LMS)** designed to simplify teaching and learning. It provides role-based access for Admins, Instructors, and Learners with a responsive, intuitive UI and secure backend.

---

## 🚀 Features

* **Role-based Access**: Admin, Instructor, and Learner functionalities.
* **Authentication**: JWT-based secure login and signup.
* **Course Management**: Create, edit, delete, and enroll in courses.
* **Media Handling**: Upload and stream videos and resources seamlessly.
* **Payments & Subscription**: Purchase or subscribe to premium courses.
* **Certificates**: Auto-generate completion certificates.
* **UI/UX**: Responsive, modern interface using DaisyUI and Tailwind.

---

## 🛠️ Tech Stack

* **Frontend**: React, Tailwind CSS, DaisyUI
* **Backend**: Node.js, Express.js
* **Database**: MongoDB with Mongoose
* **Authentication**: JWT, cookie-parser
* **Media**: Cloudinary
* **Payments**: Stripe / Razorpay
* **Others**: Context API, REST APIs

---

## 📂 Project Structure

```
Skillex/
│── client/        # React frontend
│── server/        # Node.js backend
│── docs/          # Documentation & UML diagrams
│── README.md
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/skillex.git
   cd skillex
   ```

2. Install dependencies for client and server:

   ```bash
   cd client && npm install
   cd ../server && npm install
   ```

3. Set up environment variables in `.env`:

   ```
   MONGO_URI=your_mongo_url
   JWT_SECRET=your_secret_key
   CLOUDINARY_KEY=your_cloudinary_key
   STRIPE_KEY=your_stripe_key
   ```

4. Start development servers:

   ```bash
   cd client && npm run dev
   cd ../server && npm run dev
   ```

---

## 📖 Future Enhancements

* Admin analytics dashboard
* Instructor–student interaction features
* Learner notifications and progress tracking

---

## 👨‍💻 Author

**Wasiq Afnan Ansari**
BCA Graduate | MCA Student | CS Tutor & Developer

---

## 📜 License

This project is licensed under the **MIT License**.
