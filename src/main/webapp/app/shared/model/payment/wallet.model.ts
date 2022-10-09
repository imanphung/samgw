import dayjs from 'dayjs';

export interface IWallet {
  id?: number;
  userId?: number;
  amount?: number;
  createdAt?: string;
  updatedAt?: string;
}

export const defaultValue: Readonly<IWallet> = {};
