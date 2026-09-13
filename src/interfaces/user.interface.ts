export interface UserRow {
  id: number;
  subsidiary_id: number;
  email: string;
  password_hash: string;
  full_name: string;
  role: string;
  status: string;
  created_at: Date;
}

export interface UserDTO {
  id: number | string;
  subsidiaryId: number | string;
  email: string;
  fullName: string;
  role: string;
  status: string;
  createdAt: Date | string;
}