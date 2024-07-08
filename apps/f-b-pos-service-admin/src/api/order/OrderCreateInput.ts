import { InputJsonValue } from "../../types";
import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";
import { BillingCreateNestedManyWithoutOrdersInput } from "./BillingCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  items?: InputJsonValue;
  status?: "Option1" | null;
  totalAmount?: number | null;
  waiter?: string | null;
  table?: TableWhereUniqueInput | null;
  billings?: BillingCreateNestedManyWithoutOrdersInput;
};
