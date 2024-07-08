import { OrderCreateNestedManyWithoutTablesInput } from "./OrderCreateNestedManyWithoutTablesInput";

export type TableCreateInput = {
  numberField?: number | null;
  status?: "Option1" | null;
  assignedWaiter?: string | null;
  orders?: OrderCreateNestedManyWithoutTablesInput;
};
