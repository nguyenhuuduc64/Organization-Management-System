import subsidiaryRepository from "../repository/subsidiary.repository";

const subsidiaryService = {
    getAllSubsidiaries: async () => {
        const rows = await subsidiaryRepository.getAll();
        return rows.map((row: any) => ({
            id: row.id,
            name: row.name,
            code: row.code,
            organizationId: row.organization_id,
            status: row.status,
            createdAt: row.created_at,
        }));
    },
    getSubsidiaryById: async (id: number) => {
        const row = await subsidiaryRepository.getById(id);
        if (!row) return null;
        return {
            id: row.id,
            name: row.name,
            code: row.code,
            country: row.country,
            organizationId: row.organization_id,
            status: row.status,
            createdAt: row.created_at,
        };
    },
    getSubsidiariesByOrganizationId: async (organizationId: number) => {
        const rows = await subsidiaryRepository.getByOrganizationId(organizationId);
        return rows.map((row: any) => ({
            id: row.id,
            name: row.name,
            code: row.code,
            organizationId: row.organization_id,
            status: row.status,
            createdAt: row.created_at,
        }));
    }
}

export = subsidiaryService;