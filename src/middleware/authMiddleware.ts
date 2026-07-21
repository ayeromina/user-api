import jwt from "jsonwebtoken";

import "dotenv/config";

const SECRET_KEY = process.env.JWT_SECRET as string;


export function authMiddleware(req: any, res: any, next: any) {

    const authHeader = req.headers.authorization;


    if (!authHeader) {
        return res.status(401).json({
            message: "Authorization token missing."
        });
    }


    const token = authHeader.split(" ")[1];


    try {

        const decoded = jwt.verify(
            token,
            SECRET_KEY
        );


        req.user = decoded;


        next();

    } catch (error) {

        return res.status(401).json({
            message: "Invalid token."
        });
    }
}