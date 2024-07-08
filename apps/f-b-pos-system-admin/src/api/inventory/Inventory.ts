export type Inventory = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  itemName: string | null;
  quantity: number | null;
  lowStockAlertThreshold: number | null;
};
