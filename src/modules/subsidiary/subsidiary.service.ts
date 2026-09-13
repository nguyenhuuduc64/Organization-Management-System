import { SubsidiaryDTO, SubsidiaryRow } from "../../interfaces/subsidiary.interface";
import subsidiaryRepository from "./subsidiary.repository";

type SubsidiaryServiceType = {
    getAllSubsidiaries: () => Promise<SubsidiaryDTO[]>;
    getSubsidiaryById: (id: number) => Promise<SubsidiaryDTO | null>;
    getSubsidiariesByOrganizationId: (organizationId: number) => Promise<SubsidiaryDTO[]>;
}

const subsidiaryService: SubsidiaryServiceType = {
    getAllSubsidiaries: async () => {
        const rows = await subsidiaryRepository.getAll();
        return rows.map((row: SubsidiaryRow) => ({
            id: row.id,
            name: row.name,
            code: row.code,
            country: row.country,
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
        return rows.map((row: SubsidiaryRow) => ({
            id: row.id,
            name: row.name,
            code: row.code,
            country: row.country,
            organizationId: row.organization_id,
            status: row.status,
            createdAt: row.created_at,
        }));
    }
}

export = subsidiaryService;