import { Order } from "../order/Order";

export type Table = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  numberField: number | null;
  assignedTo: string | null;
  orders?: Array<Order>;
};
