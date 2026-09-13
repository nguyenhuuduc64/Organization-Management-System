import { UserRequestDTO } from "../dto/request/user";

const pool = require("../db");

const userRepository = {
    getAll: async () => {
        const result = await pool.query(`
            SELECT
                id, email, status, created_at, subsidiary_id, full_name, role
            FROM
                users
        `);
        return result.rows;
    },
    getById: async (id: number) => {
        const result = await pool.query(
            `
            SELECT
                id, email, status, created_at, subsidiary_id, full_name, role
            FROM
                users
            WHERE
                id = $1
            `,
            [id]
        );
        return result.rows[0] || null;
    },
    getBySubsidiaryId: async (subsidiaryId: number) => {
        const result = await pool.query(
            `SELECT 
                id, email, status, created_at, subsidiary_id, full_name, role
            FROM
                users
            WHERE
                subsidiary_id = $1
            `,
            [subsidiaryId]
        );
        return result.rows;
    },
    findByEmail: async (email: string) => {
        const result = await pool.query(
            `SELECT 
                id, email, status, created_at, subsidiary_id, full_name, role
            FROM
                users
            WHERE
                email = $1
            `,
            [email]
        );
        return result.rows[0] || null;
    },
    save: async (user: UserRequestDTO) => {
        const result = await pool.query(
            `INSERT INTO users (subsidiary_id, email, password_hash, full_name, role, status, created_at)
            VALUES ($1, $2, $3, $4, $5, $6, NOW())
            RETURNING id, subsidiary_id, email, full_name, role, status, created_at`,
            [user.subsidiaryId, user.email, user.password, user.fullName, user.role, 'ACTIVE']
        );
        return result.rows[0];
    }
}

export = userRepository;