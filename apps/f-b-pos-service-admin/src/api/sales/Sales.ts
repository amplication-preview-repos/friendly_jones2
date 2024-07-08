import { JsonValue } from "type-fest";

export type Sales = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  totalSales: number | null;
  dailyReport: JsonValue;
};
