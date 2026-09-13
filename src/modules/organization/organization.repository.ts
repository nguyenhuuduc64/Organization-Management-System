import pool = require("../../db");
import { OrganizationRow } from "../../interfaces/organization.interface";

type OrganizationRepositoryType = {
  findAll: () => Promise<OrganizationRow[]>;
  findById: (id: string | number) => Promise<OrganizationRow | null>;
};

const organizationRepository: OrganizationRepositoryType = {
  findAll: async () => {
    const result = await pool.query(`
      SELECT id, name, code, status, created_at
      FROM organizations
      ORDER BY id
    `);
    return result.rows;
  },

  findById: async (id: string | number) => {
    const result = await pool.query(
      `
      SELECT id, name, code, status, created_at
      FROM organizations
      WHERE id = $1
      `,
      [id]
    );
    return result.rows[0] || null;
  }
};

export = organizationRepository;