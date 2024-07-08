import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type MenuWhereInput = {
  id?: StringFilter;
  qrCode?: StringNullableFilter;
  menuItems?: JsonFilter;
  restaurant?: StringNullableFilter;
};
