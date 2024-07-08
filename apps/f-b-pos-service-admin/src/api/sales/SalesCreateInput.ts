import { InputJsonValue } from "../../types";

export type SalesCreateInput = {
  date?: Date | null;
  totalSales?: number | null;
  dailyReport?: InputJsonValue;
};
