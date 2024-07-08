export type FoodMenu = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  itemName: string | null;
  price: number | null;
  remainingQuantity: number | null;
};
