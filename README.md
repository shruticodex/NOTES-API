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

## 🧪 API Endpoints

### 🔐 Auth Routes

#### 📌 Register
**POST** `/api/auth/register`

**Body:**
```json
{
  "name": "Shruti",
  "email": "shruti@example.com",
  "password": "1234"
}
```
#### 📌 Login
**POST** `/api/auth/login`

***Body:***
```json
{
  "email": "shruti@example.com",
  "password": "1234"
}
```
**Response:**
```json
{
  "token": "JWT_TOKEN_HERE"
}
```
🛡️ Protected Routes (Require Bearer Token)
All protected requests must include the header:

**Authorization: Bearer <your_token>**
### 🗒️ Notes API
**📌 Create a Note**
`POST /api/notes`

***Body:***

```json
{
  "title": "My Note",
  "content": "This is the content of my note"
}
```
**📌 Get All Notes**
`GET /api/notes`

**📌 Update a Note**
`PATCH /api/notes/:id`

***Body:***

```json
{
  "title": "Updated Title",
  "content": "Updated content"
}
```
**📌 Delete a Note**
`DELETE /api/notes/:id`

***🧍‍♀️ User Settings:***
**📌 Update Email**
`PATCH /api/auth/update-email`

***Body:***

```json
{
  "newEmail": "shruti.new@example.com"
}
```
#### ⚙️ Setup Instructions
1. **📁 Clone the repo**
```bash
git clone https://github.com/shruticodex/NOTES-API.git
cd notes-api
```
2. **📦 Install dependencies**
```bash
npm install
```
3. **🛠️ Create .env file**
```bash
cp .env.example .env
```
Then fill in .env:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
4. **🚀 Run the server**
```bash
npm run dev
```
***Visit: http://localhost:5000***

#### 🧪 Testing Tools
You can test the API using:

🔹 Thunder Client (VS Code extension) ✅ (Used)

🔹 Postman

🔹 curl

#### 📌 Example Token Usage
Header for protected routes:

**Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NzRhMjhkNmRhOTNmZjQzMWZmMmI1NSIsImlhdCI6MTc1MjQ3NDMyMywiZXhwIjoxNzUzMDc5MTIzfQ.JHva7ap7IfbKoi7jhAoHhX1ncfgD-e3lyYj8EeXsTQ4**



