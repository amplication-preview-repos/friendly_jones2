import { InputJsonValue } from "../../types";

export type SalesUpdateInput = {
  date?: Date | null;
  totalSales?: number | null;
  dailyReport?: InputJsonValue;
};
