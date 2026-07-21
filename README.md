# User API

REST API built with TypeScript, Express, SQLite, bcrypt and JWT authentication.

This project was created to practice backend API development and API testing with Postman.

## Technologies

- Node.js
- TypeScript
- Express.js
- SQLite
- better-sqlite3
- bcrypt
- JSON Web Token (JWT)

## Features

### User Management

- Create users
- Get all users
- Get user by ID
- Update users
- Partial update users
- Delete users

### Authentication

- User login
- Password hashing with bcrypt
- JWT token generation
- Protected routes

### Validation

- Required fields validation
- Email format validation
- Password requirements
- Unique email constraint

## Installation

Clone the repository:

```bash
git clone https://github.com/ayeromina/user-api.git
```

Go to the project folder:

```bash
cd user-api
```

Install dependencies:

```bash
npm install
```

## Environment Variables

This project uses environment variables for sensitive data.

Create a `.env` file in the project root:

```env
JWT_SECRET=your_secret_key
```

## Running the Project

Start the development server:

```bash
npm run dev
```

The API will run at:

```text
http://localhost:3000
```

## API Endpoints

### Health Check

```http
GET /health
```

### Users

Create user:

```http
POST /users
```

Get all users:

```http
GET /users
```

Get user by ID:

```http
GET /users/:id
```

Update user:

```http
PUT /users/:id
```

Partially update user:

```http
PATCH /users/:id
```

Delete user:

```http
DELETE /users/:id
```

### Authentication

Login:

```http
POST /login
```

Get profile:

```http
GET /profile
```

Profile requires authentication:

```text
Authorization: Bearer <token>
```

## Future Improvements

- Automated Postman test collection
- Newman test execution
- CI/CD pipeline
- More API validation