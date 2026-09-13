import { UserRequestDTO } from "./dto/request/user";
import userRepository = require("./user.repository");
import { UserResponseDTO } from "./dto/response/user";
import { UserRow } from "../../interfaces/user.interface";
type UserServiceType = {
    getAllUsers: () => Promise<UserResponseDTO[]>;
    getUserById: (id: number) => Promise<UserResponseDTO | null>;
    getBySubsidiaryId: (subsidiaryId: number) => Promise<UserResponseDTO[]>;
    createUser: (user: UserRequestDTO) => Promise<UserResponseDTO>;
}

const userService: UserServiceType = {
    getAllUsers: async () => {
        const rows = await userRepository.getAll();
        return rows.map((row: UserRow) => ({
            id: row.id,
            email: row.email,
            status: row.status,
            createdAt: row.created_at,
            subsidiaryId: row.subsidiary_id,
            fullName: row.full_name,
            role: row.role,
        }));
    }, 
    getUserById: async (id: number) => {
        const row = await userRepository.getById(id);
        if (!row) return null;
        return {
            id: row.id,
            email: row.email,
            status: row.status,
            createdAt: row.created_at,
            subsidiaryId: row.subsidiary_id,
            fullName: row.full_name,
            role: row.role,
            password_hash: row.password_hash,
        };
    },
    getBySubsidiaryId: async (subsidiaryId: number) => {
        const rows = await userRepository.getBySubsidiaryId(subsidiaryId);
        return rows.map((row: UserRow) => ({
            id: row.id,
            email: row.email,
            status: row.status,
            createdAt: row.created_at,
            subsidiaryId: row.subsidiary_id,
            fullName: row.full_name,
            role: row.role,
        }));
    },
    createUser: async(user: UserRequestDTO) => {
        const existingUser = await userRepository.findByEmail(user.email);
        if (existingUser) {
            throw new Error("User with this email already exists");
        }
        const newUser = await userRepository.save(user);
        return {
            id: newUser.id,
            email: newUser.email,
            status: newUser.status,
            createdAt: newUser.created_at,
            subsidiaryId: newUser.subsidiary_id,
            fullName: newUser.full_name,
            role: newUser.role,
        };
    }
}

export = userService;