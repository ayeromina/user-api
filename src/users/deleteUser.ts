import db from "../database/database";

export function deleteUser(req: any, res: any) {

    const userId = Number(req.params.id);


    const result = db.prepare(`
        DELETE FROM users
        WHERE id = ?
    `).run(userId);


    if (result.changes === 0) {
        return res.status(404).json({
            message: "User not found"
        });
    }


    res.status(200).json({
        message: "User deleted successfully"
    });
}