import { OrderUpdateManyWithoutTablesInput } from "./OrderUpdateManyWithoutTablesInput";

export type TableUpdateInput = {
  status?: "Option1" | null;
  numberField?: number | null;
  assignedTo?: string | null;
  orders?: OrderUpdateManyWithoutTablesInput;
};
