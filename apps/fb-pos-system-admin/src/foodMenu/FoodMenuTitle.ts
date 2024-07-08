import { FoodMenu as TFoodMenu } from "../api/foodMenu/FoodMenu";

export const FOODMENU_TITLE_FIELD = "itemName";

export const FoodMenuTitle = (record: TFoodMenu): string => {
  return record.itemName?.toString() || String(record.id);
};
