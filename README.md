# 📝 Notes API

A simple and secure RESTful API for user registration, authentication, and note-taking using Node.js, Express, MongoDB, JWT, and bcrypt.

> ✅ Designed for real-world backend projects and internship submissions  
> 💻 Built with modular structure, full CRUD, and protected routes

---

## 🚀 Features

- 🔐 **User Authentication** (JWT-based)
  - Register new users
  - Secure login with hashed passwords
- 🗒️ **Note Management**
  - Create, Read, Update, Delete notes
  - Notes are linked to their authors
- 🔒 Protected routes with middleware
- 🕒 Timestamps for each note (createdAt, updatedAt)
- 📦 Ready to deploy or integrate with a frontend

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB (via Mongoose)
- **Auth:** JWT + bcryptjs
- **Dev Tools:** Nodemon, dotenv

---

## 📁 Project Structure

notes-api/
├── controllers/
│ ├── authController.js
│ └── noteController.js
├── models/
│ ├── User.js
│ └── Note.js
├── routes/
│ ├── authRoutes.js
│ └── noteRoutes.js
├── middlewares/
│ └── authMiddleware.js
├── .env.example
├── server.js
└── package.json

---

## 🧪 API Endpoints

### 🔐 Auth Routes

#### 📌 Register
POST /api/auth/register

**Body:**
```json
{
  "name": "Shruti",
  "email": "shruti@example.com",
  "password": "1234"
}
📌 Login

POST /api/auth/login
Body:

{
  "email": "shruti@example.com",
  "password": "123456"
}
Response:

{
  "token": "JWT_TOKEN_HERE"
}
🛡️ Protected Routes (Require Bearer Token)
Header for all below:

Authorization: Bearer <your_token>
🗒️ Notes API
📌 Create a Note

POST /api/notes
Body:

{
  "title": "My Note",
  "content": "This is the content of my note"
}
📌 Get All Notes

GET /api/notes

📌 Update a Note

PATCH /api/notes/:id

Body:

{
  "title": "Updated Title",
  "content": "Updated content"
}
📌 Delete a Note

DELETE /api/notes/:id
🧍‍♀️ User Settings
📌 Update Email

PATCH /api/auth/update-email

Body:

{
  "newEmail": "shruti.new@example.com"
}

⚙️ Setup Instructions
1. 📁 Clone the repo

git clone https://github.com/shruticodex/NOTES API.git
cd notes-api
2. 📦 Install dependencies

npm install
3. 🛠️ Create .env file

cp .env.example .env
Edit .env and fill:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
4. 🚀 Run the server

npm run dev
Server should start on: http://localhost:5000

🧪 Testing Tools
You can test the API using:

🔹 Thunder Client (VS Code extension)

🔹 Postman

🔹 curl

 Note:I used Thunder Client.

📌 Example Token Usage
Header for protected routes:

Authorization: Bearer <your_token_here>

✨ Credits:

Built by Shruti as part of an internship assignment to demonstrate full backend capability using secure practices and RESTful architecture.