import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OwnerWhereInput = {
  id?: StringFilter;
  email?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  name?: StringNullableFilter;
};
