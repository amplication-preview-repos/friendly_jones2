import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type BillingWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  paymentMethod?: "Option1";
  status?: "Option1";
  order?: OrderWhereUniqueInput;
};
