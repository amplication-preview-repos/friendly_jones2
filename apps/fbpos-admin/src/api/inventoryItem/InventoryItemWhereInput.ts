import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type InventoryItemWhereInput = {
  id?: StringFilter;
  quantity?: IntNullableFilter;
  alertLevel?: IntNullableFilter;
  name?: StringNullableFilter;
};
