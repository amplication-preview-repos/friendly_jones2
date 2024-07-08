export type Sales = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  saleId: string | null;
  date: Date | null;
  totalAmount: number | null;
  restaurant: string | null;
};
