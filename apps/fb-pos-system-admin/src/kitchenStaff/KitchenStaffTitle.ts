import { KitchenStaff as TKitchenStaff } from "../api/kitchenStaff/KitchenStaff";

export const KITCHENSTAFF_TITLE_FIELD = "name";

export const KitchenStaffTitle = (record: TKitchenStaff): string => {
  return record.name?.toString() || String(record.id);
};
