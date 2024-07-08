import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type MenuWhereInput = {
  id?: StringFilter;
  qrCodeUrl?: StringNullableFilter;
  availableItems?: JsonFilter;
};
