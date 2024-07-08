import { InputJsonValue } from "../../types";
import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";
import { BillingUpdateManyWithoutOrdersInput } from "./BillingUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  items?: InputJsonValue;
  status?: "Option1" | null;
  totalAmount?: number | null;
  waiter?: string | null;
  table?: TableWhereUniqueInput | null;
  billings?: BillingUpdateManyWithoutOrdersInput;
};
