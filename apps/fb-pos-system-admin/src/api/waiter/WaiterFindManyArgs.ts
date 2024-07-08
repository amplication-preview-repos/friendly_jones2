import { WaiterWhereInput } from "./WaiterWhereInput";
import { WaiterOrderByInput } from "./WaiterOrderByInput";

export type WaiterFindManyArgs = {
  where?: WaiterWhereInput;
  orderBy?: Array<WaiterOrderByInput>;
  skip?: number;
  take?: number;
};
