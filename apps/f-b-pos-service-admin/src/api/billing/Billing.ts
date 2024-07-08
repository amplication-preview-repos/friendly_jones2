import { Order } from "../order/Order";

export type Billing = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  paymentMethod?: "Option1" | null;
  status?: "Option1" | null;
  order?: Order | null;
};
