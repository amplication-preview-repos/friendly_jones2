import { Cashier } from "../cashier/Cashier";

export type Billing = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  paymentMethod?: "Option1" | null;
  billNumber: string | null;
  order: string | null;
  cashier?: Cashier | null;
};
