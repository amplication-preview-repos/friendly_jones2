import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RestaurantWhereInput = {
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
};
