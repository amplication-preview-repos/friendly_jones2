import { WaiterWhereUniqueInput } from "../waiter/WaiterWhereUniqueInput";

export type TablesCreateInput = {
  tableNumber?: number | null;
  status?: "Option1" | null;
  waiter?: WaiterWhereUniqueInput | null;
};
