import { Billing } from "../billing/Billing";

export type Cashier = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  phoneNumber: string | null;
  restaurant: string | null;
  billings?: Array<Billing>;
};
