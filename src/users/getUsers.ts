import db from "../database/database";

export function getUsers(req: any, res: any) {

    const users = db.prepare(`
        SELECT id, username, email
        FROM users
    `).all();


    res.status(200).json(users);
}