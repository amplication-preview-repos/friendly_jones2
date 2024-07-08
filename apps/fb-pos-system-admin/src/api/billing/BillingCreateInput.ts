import { CashierWhereUniqueInput } from "../cashier/CashierWhereUniqueInput";

export type BillingCreateInput = {
  amount?: number | null;
  paymentMethod?: "Option1" | null;
  billNumber?: string | null;
  order?: string | null;
  cashier?: CashierWhereUniqueInput | null;
};
