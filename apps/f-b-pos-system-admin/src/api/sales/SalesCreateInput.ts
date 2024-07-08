import { InputJsonValue } from "../../types";

export type SalesCreateInput = {
  saleDate?: Date | null;
  totalAmount?: number | null;
  itemsSold?: InputJsonValue;
};
