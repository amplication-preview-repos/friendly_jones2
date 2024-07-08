import { KitchenStaff as TKitchenStaff } from "../api/kitchenStaff/KitchenStaff";

export const KITCHENSTAFF_TITLE_FIELD = "id";

export const KitchenStaffTitle = (record: TKitchenStaff): string => {
  return record.id?.toString() || String(record.id);
};
