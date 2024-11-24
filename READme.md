# Library Management System API

## Project Overview
This project is a simple **Library Management System API** built with **Node.js**, **TypeScript**, **Express**, and **Sequelize**. It provides endpoints for managing:
- **Users**: Adding and listing users.
- **Books**: Adding and listing books.
- **Borrow Records**: Managing borrowing transactions (planned for future implementation).

The system uses **SQLite** as its database to ensure simplicity and ease of development.

---

## Features
- **User Management:**
  - List all users (`GET /users`).
  - Add a new user (`POST /users` - temporarily disabled due to type issues).
- **Book Management:**
  - List all books (`GET /books`).
  - Add a new book (`POST /books`).
- **Borrow Management:**
  - Borrowing functionality is not yet implemented in this version.

---

## Project Structure
📂 src ├── 📂 models │ ├── Book.ts # Book model definition │ ├── Borrow.ts # Borrow model definition (with database relationships) │ ├── User.ts # User model definition │ ├── database.ts # Sequelize database connection setup ├── 📂 routes │ ├── bookRoutes.ts # Routes for book-related operations │ ├── userRoutes.ts # Routes for user-related operations ├── app.ts # Main application entry point └── 📂 types ├── requests.ts # Custom request types for users and books


---

## Installation and Setup

### Prerequisites
- **Node.js** (v16+ recommended)
- **npm** or **yarn** for dependency management

### Steps to Run the Project

1. Install project dependencies:

npm install

2. Run the development server:
npm start

3. Test the API using Postman or curl:

Example: GET http://localhost:3000/users to list all users.
Example: POST http://localhost:3000/books with body { "name": "Book Name" } to add a book.

#### Technologies Used
1. Node.js: JavaScript runtime for building scalable server-side applications.
2. Express: Web framework for routing and middleware.
3. TypeScript: Superset of JavaScript for type safety and better development experience.
4. Sequelize: ORM for database modeling and querying.
5. SQLite: Lightweight database for development and testing.

##### Future Improvements
1. Fix TypeScript custom request types and re-enable all routes.
2. Implement borrow functionality:
     Borrow a book (POST /borrow).
     List borrow records (GET /borrow).
3. Add automated tests with Jest or Mocha.
4. Improve error handling and input validation using a library like joi.

###### API Test Results Example

API tests were performed using Postman. Below are sample requests and responses:

1. GET /users
![GET /users](image.getUser.png)

2. POST /users
![POST /user](image.postUser.png)

3. GET /books
![GET /books](image.getBook.png)

2. POST /users
![POST/create book](mage.postCreateBook.png)







