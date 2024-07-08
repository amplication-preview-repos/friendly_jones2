import { TablesUpdateManyWithoutWaitersInput } from "./TablesUpdateManyWithoutWaitersInput";

export type WaiterUpdateInput = {
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  restaurant?: string | null;
  tablesItems?: TablesUpdateManyWithoutWaitersInput;
};
