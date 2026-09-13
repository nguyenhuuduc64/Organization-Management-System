export interface SubsidiaryRow {
  id: number;
  organization_id: number;
  name: string;
  code: string;
  country: string | null;
  status: string;
  created_at: Date;
}

export interface SubsidiaryDTO {
  id: number | string;
  organizationId: number | string;
  name: string;
  code: string;
  country: string | null;
  status: string;
  createdAt: Date | string;
}