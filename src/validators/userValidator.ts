export function validateRequiredFields(
    username: string,
    email: string,
    password: string
) {

    if (
        !username?.trim() ||
        !email?.trim() ||
        !password?.trim()
    ) {
        return {
            valid: false,
            message: "Username, email and password are required."
        };
    }

if (username.trim().length < 3) {
    return {
        valid: false,
        message: "Username must be at least 3 characters long."
    };
}
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email.trim())) {
    return {
        valid: false,
        message: "Email format is invalid."
    };
}
const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#_-]).{8,}$/;

if (!passwordRegex.test(password)) {
    return {
        valid: false,
        message:
            "Password must be at least 8 characters long and contain uppercase, lowercase, number and special character."
    };
}
    return {
        valid: true
    };
}
