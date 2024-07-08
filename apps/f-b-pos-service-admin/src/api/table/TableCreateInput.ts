import { OrderCreateNestedManyWithoutTablesInput } from "./OrderCreateNestedManyWithoutTablesInput";

export type TableCreateInput = {
  status?: "Option1" | null;
  numberField?: number | null;
  assignedTo?: string | null;
  orders?: OrderCreateNestedManyWithoutTablesInput;
};
