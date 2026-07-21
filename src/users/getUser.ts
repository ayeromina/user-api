import db from "../database/database";

export function getUser(req: any, res: any) {

    const userId = Number(req.params.id);


    const user = db.prepare(`
        SELECT id, username, email
        FROM users
        WHERE id = ?
    `).get(userId);


    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }


    res.status(200).json(user);
}