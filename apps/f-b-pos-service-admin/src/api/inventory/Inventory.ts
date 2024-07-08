export type Inventory = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  itemName: string | null;
  category: string | null;
  alertThreshold: number | null;
  quantity: number | null;
};
