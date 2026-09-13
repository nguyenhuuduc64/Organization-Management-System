import organizationService = require("./organization.service");
import subsidiaryService from "../subsidiary/subsidiary.service";
import { OrganizationDTO } from '../../interfaces/organization.interface';
import { SubsidiaryDTO } from "../../interfaces/subsidiary.interface";
type OrganizationResolvers = {
  Query: {
    organizations: () => Promise<OrganizationDTO[]>;
    organization: (_: unknown, args: { id: string }) => Promise<OrganizationDTO | null>;
  },
  Organization: {
    subsidiaries: (parent: { id: number }) => Promise<SubsidiaryDTO[]>;
  }
}
const organizationResolvers: OrganizationResolvers = {
  Query: {
    organizations: async () => {
      return await organizationService.getAllOrganizations();
    },
    organization: async (_: unknown, args: { id: string }) => {
      return await organizationService.getOrganizationById(args.id);
    },
  },
  Organization: {
    subsidiaries: async (parent: { id: number }) => {
      return await subsidiaryService.getSubsidiariesByOrganizationId(parent.id);
    },
  },
};

export = organizationResolvers;