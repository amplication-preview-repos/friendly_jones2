import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type MenuItemWhereInput = {
  id?: StringFilter;
  quantity?: IntNullableFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
};
