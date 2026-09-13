import userService = require("../../service/user.service");
import { UserDTO } from "../../interfaces/user.interface";
import { UserResponseDTO } from "../../dto/response/user";
import { UserRequestDTO } from "../../dto/request/user";
type UserResolvers = {
    Query: {
        users: () => Promise<UserDTO[]>;
        user: (_: unknown, args: { id: number }) => Promise<UserDTO | null>;
    },
    Mutation: {
        createUser: (_: unknown, args: { user: UserRequestDTO }) => Promise<UserResponseDTO>;
    } 
};
const userResolvers: UserResolvers = {
    Query: {
        users: async () => {
            return await userService.getAllUsers();
        },
        user: async (_: unknown, args: { id: number }) => {
            return await userService.getUserById(args.id);
        }
    },
    Mutation: {
        createUser: async (_: unknown, args: { user: UserRequestDTO }) => {
            return await userService.createUser(args.user);
        }
    }
}
export = userResolvers;