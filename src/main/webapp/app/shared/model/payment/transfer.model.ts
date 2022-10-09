import dayjs from 'dayjs';

export interface ITransfer {
  id?: number;
  fromUserId?: number;
  toUserId?: number;
  amount?: number;
  createdAt?: string;
  updatedAt?: string;
}

export const defaultValue: Readonly<ITransfer> = {};
