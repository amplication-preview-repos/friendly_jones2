import { WaiterWhereUniqueInput } from "../waiter/WaiterWhereUniqueInput";

export type TablesUpdateInput = {
  tableNumber?: number | null;
  status?: "Option1" | null;
  waiter?: WaiterWhereUniqueInput | null;
};
