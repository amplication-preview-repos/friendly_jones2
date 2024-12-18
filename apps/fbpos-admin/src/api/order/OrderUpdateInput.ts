import { InputJsonValue } from "../../types";
import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";

export type OrderUpdateInput = {
  status?: "Option1" | null;
  orderedItems?: InputJsonValue;
  table?: TableWhereUniqueInput | null;
};
