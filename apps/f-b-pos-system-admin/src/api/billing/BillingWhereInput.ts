import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type BillingWhereInput = {
  id?: StringFilter;
  totalAmount?: FloatNullableFilter;
  paymentMethod?: "Option1";
  status?: "Option1";
};
