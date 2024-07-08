import { TablesCreateNestedManyWithoutWaitersInput } from "./TablesCreateNestedManyWithoutWaitersInput";

export type WaiterCreateInput = {
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  restaurant?: string | null;
  tablesItems?: TablesCreateNestedManyWithoutWaitersInput;
};
