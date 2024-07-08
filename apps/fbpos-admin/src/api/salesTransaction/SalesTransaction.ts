export type SalesTransaction = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  timestamp: Date | null;
  totalAmount: number | null;
  paymentMethod?: "Option1" | null;
};
