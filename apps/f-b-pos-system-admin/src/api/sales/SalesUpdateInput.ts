import { InputJsonValue } from "../../types";

export type SalesUpdateInput = {
  saleDate?: Date | null;
  totalAmount?: number | null;
  itemsSold?: InputJsonValue;
};
