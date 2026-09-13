export interface OrganizationRow {
  id: number;
  name: string;
  code: string;
  status: string;
  created_at: Date;
}

export interface OrganizationDTO {
  id: number | string;
  name: string;
  code: string;
  status: string;
  createdAt: Date | string;
}
