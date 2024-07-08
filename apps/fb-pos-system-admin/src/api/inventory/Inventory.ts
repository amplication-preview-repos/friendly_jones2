export type Inventory = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  itemName: string | null;
  quantity: number | null;
  alerts: number | null;
  restaurant: string | null;
};
