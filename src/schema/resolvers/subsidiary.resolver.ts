import subsidiaryService = require("../../service/subsidiary.service");
import userService = require("../../service/user.service");
import { SubsidiaryDTO } from "../../interfaces/subsidiary.interface";
import { UserDTO } from "../../interfaces/user.interface";
type SubsidiaryResolvers = {
    Query: {
        subsidiaries: () => Promise<SubsidiaryDTO[]>;
        subsidiary: (_: unknown, args: { id: number }) => Promise<SubsidiaryDTO | null>;
    }
    Subsidiary: {
        users: (parent: { id: number }) => Promise<UserDTO[]>;
    }
};
const subsidiaryResolvers: SubsidiaryResolvers = {
    Query: {
        subsidiaries: async () => {
            return await subsidiaryService.getAllSubsidiaries();
        },
        subsidiary: async (_: unknown, args: { id: number }) => {
            return await subsidiaryService.getSubsidiaryById(args.id);
        },
    },
    Subsidiary: {
        users: async (parent: { id: number }) => {
            return await userService.getBySubsidiaryId(parent.id);
        }
    }
}

export = subsidiaryResolvers;