import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TablesListRelationFilter } from "../tables/TablesListRelationFilter";

export type WaiterWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  restaurant?: StringNullableFilter;
  tablesItems?: TablesListRelationFilter;
};
