import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  orderedItems?: JsonFilter;
  table?: TableWhereUniqueInput;
};
