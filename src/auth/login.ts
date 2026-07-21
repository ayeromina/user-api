import bcrypt from "bcrypt";
import db from "../database/database";
import type { User } from "../users/user.types";
import { createToken } from "./jwt";


export async function login(req: any, res: any) {

    const { email, password } = req.body || {};

    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password are required."
        });
    }

    const user = db.prepare(`
        SELECT *
        FROM users
        WHERE email = ?
    `).get(email) as User | undefined;

    if (!user) {
        return res.status(401).json({
            message: "Invalid email or password."
        });
    }

    const passwordMatches = await bcrypt.compare(
        password,
        user.password
    );

    if (!passwordMatches) {
        return res.status(401).json({
            message: "Invalid email or password."
        });
    }

    const token = createToken(
    user.id,
    user.email
);


res.status(200).json({
    message: "Login successful.",
    token
});
}