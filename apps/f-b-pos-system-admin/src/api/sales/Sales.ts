import { JsonValue } from "type-fest";

export type Sales = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  saleDate: Date | null;
  totalAmount: number | null;
  itemsSold: JsonValue;
};
