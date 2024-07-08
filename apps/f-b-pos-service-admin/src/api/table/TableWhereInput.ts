import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type TableWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  numberField?: IntNullableFilter;
  assignedTo?: StringNullableFilter;
  orders?: OrderListRelationFilter;
};
