export type InventoryItem = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  quantity: number | null;
  alertLevel: number | null;
  name: string | null;
};
