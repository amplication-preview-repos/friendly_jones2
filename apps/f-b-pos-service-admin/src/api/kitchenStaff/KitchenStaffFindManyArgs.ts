import { KitchenStaffWhereInput } from "./KitchenStaffWhereInput";
import { KitchenStaffOrderByInput } from "./KitchenStaffOrderByInput";

export type KitchenStaffFindManyArgs = {
  where?: KitchenStaffWhereInput;
  orderBy?: Array<KitchenStaffOrderByInput>;
  skip?: number;
  take?: number;
};
