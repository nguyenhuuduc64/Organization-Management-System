import pool = require("../../db");
import { SubsidiaryRow } from "../../interfaces/subsidiary.interface";

type SubsidiaryRepositoryType = {
    getAll: () => Promise<SubsidiaryRow[]>;
    getById: (id: number) => Promise<SubsidiaryRow | null>;
    getByOrganizationId: (organizationId: number) => Promise<SubsidiaryRow[]>;
}

const subsidiaryRepository: SubsidiaryRepositoryType = {
    getAll: async () => {
        const result = await pool.query(`
            SELECT
                id, organization_id, name, code, country, status, created_at
            FROM
                subsidiaries
        `);
        return result.rows;
    },
    getById: async (id: number) => {
        const result = await pool.query(
            `SELECT 
                id, organization_id, name, code, country, status, created_at
            FROM
                subsidiaries
            WHERE
                id = $1
            `,
            [id]
        );
        return result.rows[0] || null;
    },
    getByOrganizationId: async (organizationId: number) => {
        const result = await pool.query(
            `
            SELECT
                id, organization_id, name, code, country, status, created_at
            FROM
                subsidiaries
            WHERE
                organization_id = $1
            `,
            [organizationId]
        );
        return result.rows;
    }
}

export = subsidiaryRepository;