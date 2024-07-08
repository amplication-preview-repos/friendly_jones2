import { FoodMenu as TFoodMenu } from "../api/foodMenu/FoodMenu";

export const FOODMENU_TITLE_FIELD = "name";

export const FoodMenuTitle = (record: TFoodMenu): string => {
  return record.name?.toString() || String(record.id);
};
