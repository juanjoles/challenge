import { Pool } from 'pg';
import bcrypt from 'bcrypt';

const pool = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'prueba',
    password: 'root',
    port: 5432,
});

export default class User {
    constructor(public username: string, public email: string, public password: string) { }

    async save(): Promise<void> {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [this.username, this.email, hashedPassword]);
    }

    static async findByUsername(username: string): Promise<User | null> {
        const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        if (result.rows.length === 0) return null;
        const { id, email, password } = result.rows[0];
        return new User(username, email, password);
    }

    async comparePassword(password: string): Promise<boolean> {
        return await bcrypt.compare(password, this.password);
    }
}