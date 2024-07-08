export type Billing = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  totalAmount: number | null;
  paymentMethod?: "Option1" | null;
  status?: "Option1" | null;
};
