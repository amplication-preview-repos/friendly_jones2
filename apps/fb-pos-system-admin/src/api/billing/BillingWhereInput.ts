import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CashierWhereUniqueInput } from "../cashier/CashierWhereUniqueInput";

export type BillingWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  paymentMethod?: "Option1";
  billNumber?: StringNullableFilter;
  order?: StringNullableFilter;
  cashier?: CashierWhereUniqueInput;
};
