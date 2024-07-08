import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type SalesWhereInput = {
  id?: StringFilter;
  date?: DateTimeNullableFilter;
  totalSales?: FloatNullableFilter;
  dailyReport?: JsonFilter;
};
