import { BillingCreateNestedManyWithoutCashiersInput } from "./BillingCreateNestedManyWithoutCashiersInput";

export type CashierCreateInput = {
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  restaurant?: string | null;
  billings?: BillingCreateNestedManyWithoutCashiersInput;
};
