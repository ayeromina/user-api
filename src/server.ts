import express from "express"; // Import Express library so we can create an API
import { createUser } from "./users/createUser";
import { getUsers } from "./users/getUsers";
import { getUser } from "./users/getUser";
import { updateUser } from "./users/updateUser";
import { patchUser } from "./users/patchUser";
import { deleteUser } from "./users/deleteUser";
import { login } from "./auth/login";
import { getProfile } from "./users/profile";
import { authMiddleware } from "./middleware/authMiddleware";

const app = express(); //This creates our API application

const PORT = 3000; // Port where server will run

app.use(express.json());

// Create a GET endpoint called /health
// Used to check if the API is running

app.get("/health", (req, res) => {

    // Send JSON response back to the client
    res.json({
        status: "ok"
    });
});

// Create a new user
app.post("/users", createUser);

// Get user by ID
app.get("/users/:id", getUser);

// Get all users
app.get("/users", getUsers);

// Update user
app.put("/users/:id", updateUser);

// Partially update user
app.patch("/users/:id", patchUser);
// Delete user
app.delete("/users/:id", deleteUser);

app.post("/login", login);

app.get("/profile", authMiddleware, getProfile);

app.listen(PORT, '0.0.0.0', () => { // Start the server and listen for requests
    console.log(`Server is running on port ${PORT}`); // Print a message in the terminal when server starts
});