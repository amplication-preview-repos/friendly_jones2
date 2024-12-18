import { OrderUpdateManyWithoutTablesInput } from "./OrderUpdateManyWithoutTablesInput";

export type TableUpdateInput = {
  numberField?: number | null;
  status?: "Option1" | null;
  assignedWaiter?: string | null;
  orders?: OrderUpdateManyWithoutTablesInput;
};
