import type { OrganizationDTO, OrganizationRow } from "../../interfaces/organization.interface";
import organizationRepository = require("./organization.repository");
type OrganizationServiceType = {
  getAllOrganizations: () => Promise<OrganizationDTO[]>;
  getOrganizationById: (id: string) => Promise<OrganizationDTO | null>;
}


const organizationService: OrganizationServiceType = {
  getAllOrganizations: async () => {
    const rows = await organizationRepository.findAll();
    return rows.map((row: OrganizationRow) => ({
      id: row.id,
      name: row.name,
      code: row.code,
      status: row.status,
      createdAt: row.created_at,
    }));
  },

  getOrganizationById: async (id: string) => {
    const row = await organizationRepository.findById(id);
    if (!row) return null;
    return {
      id: row.id,
      name: row.name,
      code: row.code,
      status: row.status,
      createdAt: row.created_at,
    };
  }
};

export = organizationService;