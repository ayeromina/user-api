import jwt from "jsonwebtoken";
import "dotenv/config";

const SECRET_KEY = process.env.JWT_SECRET as string;


export function createToken(userId: number, email: string) {

    return jwt.sign(
        {
            id: userId,
            email: email
        },
        SECRET_KEY,
        {
            expiresIn: "1h"
        }
    );
}