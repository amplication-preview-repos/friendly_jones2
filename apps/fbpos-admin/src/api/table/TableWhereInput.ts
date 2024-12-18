import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type TableWhereInput = {
  id?: StringFilter;
  numberField?: IntNullableFilter;
  status?: "Option1";
  assignedWaiter?: StringNullableFilter;
  orders?: OrderListRelationFilter;
};
