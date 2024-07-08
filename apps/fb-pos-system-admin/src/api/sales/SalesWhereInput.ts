import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type SalesWhereInput = {
  id?: StringFilter;
  saleId?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  totalAmount?: FloatNullableFilter;
  restaurant?: StringNullableFilter;
};
