import { JsonValue } from "type-fest";
import { Table } from "../table/Table";
import { Billing } from "../billing/Billing";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  items: JsonValue;
  status?: "Option1" | null;
  totalAmount: number | null;
  waiter: string | null;
  table?: Table | null;
  billings?: Array<Billing>;
};
