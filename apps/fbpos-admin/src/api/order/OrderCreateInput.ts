import { InputJsonValue } from "../../types";
import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";

export type OrderCreateInput = {
  status?: "Option1" | null;
  orderedItems?: InputJsonValue;
  table?: TableWhereUniqueInput | null;
};
