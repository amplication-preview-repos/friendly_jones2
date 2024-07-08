import { Waiter } from "../waiter/Waiter";

export type Tables = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  tableNumber: number | null;
  status?: "Option1" | null;
  waiter?: Waiter | null;
};
