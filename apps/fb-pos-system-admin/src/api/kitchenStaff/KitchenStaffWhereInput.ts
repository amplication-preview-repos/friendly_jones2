import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type KitchenStaffWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  restaurant?: StringNullableFilter;
};
