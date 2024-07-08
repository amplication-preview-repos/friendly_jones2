import { Billing as TBilling } from "../api/billing/Billing";

export const BILLING_TITLE_FIELD = "billNumber";

export const BillingTitle = (record: TBilling): string => {
  return record.billNumber?.toString() || String(record.id);
};
