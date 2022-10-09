import dayjs from 'dayjs';

export interface IMint {
  id?: number;
  adminId?: number;
  amount?: number;
  createdAt?: string;
  updatedAt?: string;
}

export const defaultValue: Readonly<IMint> = {};
