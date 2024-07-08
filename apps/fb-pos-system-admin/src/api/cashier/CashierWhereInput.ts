import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BillingListRelationFilter } from "../billing/BillingListRelationFilter";

export type CashierWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  restaurant?: StringNullableFilter;
  billings?: BillingListRelationFilter;
};
