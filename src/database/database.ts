// Import SQLite library
import Database from "better-sqlite3";

// Create or open database file
const db = new Database("database.sqlite");

// Create users table if it does not exist
db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    )
`);

// Export database so other files can use it
export default db