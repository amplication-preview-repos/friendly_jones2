import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type SalesTransactionWhereInput = {
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  totalAmount?: FloatNullableFilter;
  paymentMethod?: "Option1";
};
