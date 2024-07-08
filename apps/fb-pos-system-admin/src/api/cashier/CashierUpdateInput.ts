import { BillingUpdateManyWithoutCashiersInput } from "./BillingUpdateManyWithoutCashiersInput";

export type CashierUpdateInput = {
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  restaurant?: string | null;
  billings?: BillingUpdateManyWithoutCashiersInput;
};
