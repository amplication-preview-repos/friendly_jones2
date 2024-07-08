import { FoodMenuWhereInput } from "./FoodMenuWhereInput";
import { FoodMenuOrderByInput } from "./FoodMenuOrderByInput";

export type FoodMenuFindManyArgs = {
  where?: FoodMenuWhereInput;
  orderBy?: Array<FoodMenuOrderByInput>;
  skip?: number;
  take?: number;
};
