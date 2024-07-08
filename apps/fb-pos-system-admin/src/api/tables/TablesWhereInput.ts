import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { WaiterWhereUniqueInput } from "../waiter/WaiterWhereUniqueInput";

export type TablesWhereInput = {
  id?: StringFilter;
  tableNumber?: IntNullableFilter;
  status?: "Option1";
  waiter?: WaiterWhereUniqueInput;
};
