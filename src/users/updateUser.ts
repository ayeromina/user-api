import db from "../database/database";

export function updateUser(req: any, res: any) {

    const userId = Number(req.params.id);

    const { username, email } = req.body || {};


    const result = db.prepare(`
        UPDATE users
        SET username = ?, email = ?
        WHERE id = ?
    `).run(username, email, userId);


    if (result.changes === 0) {
        return res.status(404).json({
            message: "User not found"
        });
    }


    const updatedUser = db.prepare(`
        SELECT id, username, email
        FROM users
        WHERE id = ?
    `).get(userId);


    res.status(200).json(updatedUser);
}