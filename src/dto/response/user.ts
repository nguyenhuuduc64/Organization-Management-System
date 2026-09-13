export interface UserResponseDTO {
  id: number | string;
  subsidiaryId: number | string;
  email: string;
  fullName: string;
  role: string;
  status: string;
  createdAt: Date | string;
}