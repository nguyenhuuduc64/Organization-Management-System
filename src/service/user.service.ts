import { UserRequestDTO } from "../dto/request/user";
import userRepository = require("../repository/user.repository");
import { UserResponseDTO } from "../dto/response/user";
type UserServiceType = {
    getAllUsers: () => Promise<any[]>;
    getUserById: (id: number) => Promise<any | null>;
    getBySubsidiaryId: (subsidiaryId: number) => Promise<any[]>;
    createUser: (user: UserRequestDTO) => Promise<UserResponseDTO>;
}

const userService: UserServiceType = {
    getAllUsers: async () => {
        const rows = await userRepository.getAll();
        return rows.map((row: any) => ({
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
        const rows = await userRepository.getById(id);
        if (rows.length === 0) return null;
        const row = rows[0];
        return {
            id: row.id,
            email: row.email,
            status: row.status,
            createdAt: row.created_at,
        };
    },
    getBySubsidiaryId: async (subsidiaryId: number) => {
        const rows = await userRepository.getBySubsidiaryId(subsidiaryId);
        return rows.map((row: any) => ({
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