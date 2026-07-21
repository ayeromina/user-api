import db from "../database/database";
import type { User } from "./user.types";

export function patchUser(req: any, res: any) {

    const userId = Number(req.params.id);

    const { username, email } = req.body || {};


    const existingUser = db.prepare(`
        SELECT *
        FROM users
        WHERE id = ?
    `).get(userId) as User | undefined;


    if (!existingUser) {
        return res.status(404).json({
            message: "User not found"
        });
    }


    const updatedUsername = username ?? existingUser.username;
    const updatedEmail = email ?? existingUser.email;


    db.prepare(`
        UPDATE users
        SET username = ?, email = ?
        WHERE id = ?
    `).run(updatedUsername, updatedEmail, userId);


    const updatedUser = db.prepare(`
        SELECT id, username, email
        FROM users
        WHERE id = ?
    `).get(userId);


    res.status(200).json(updatedUser);
}