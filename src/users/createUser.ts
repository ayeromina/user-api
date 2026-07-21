import db from "../database/database";
import { validateRequiredFields } from "../validators/userValidator";
import bcrypt from "bcrypt";

export async function createUser(req: any, res: any) {

    const { username, email, password } = req.body || {};


    // Check required fields
    const validation = validateRequiredFields(
    username,
    email,
    password
);

if (!validation.valid) {
    return res.status(400).json({
        message: validation.message
    });
}


    // Check username length
    if (username.trim().length < 3) {
        return res.status(400).json({
            message: "Username must be at least 3 characters long."
        });
    }


    // Check if email already exists
    const existingUser = db.prepare(`
        SELECT id
        FROM users
        WHERE email = ?
    `).get(email);


    if (existingUser) {
        return res.status(409).json({
            message: "Email already exists."
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    // Create user
    const result = db.prepare(`
        INSERT INTO users (username, email, password)
        VALUES (?, ?, ?)
    `).run(username, email, hashedPassword);


    const createdUser = {
        id: result.lastInsertRowid,
        username,
        email
    };


    res.status(201).json(createdUser);
} 