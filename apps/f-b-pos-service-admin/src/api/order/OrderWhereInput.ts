import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";
import { BillingListRelationFilter } from "../billing/BillingListRelationFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  items?: JsonFilter;
  status?: "Option1";
  totalAmount?: FloatNullableFilter;
  waiter?: StringNullableFilter;
  table?: TableWhereUniqueInput;
  billings?: BillingListRelationFilter;
};
