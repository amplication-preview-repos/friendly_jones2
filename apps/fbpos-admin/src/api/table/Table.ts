import { Order } from "../order/Order";

export type Table = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  numberField: number | null;
  status?: "Option1" | null;
  assignedWaiter: string | null;
  orders?: Array<Order>;
};
