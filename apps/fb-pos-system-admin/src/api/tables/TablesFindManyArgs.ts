import { TablesWhereInput } from "./TablesWhereInput";
import { TablesOrderByInput } from "./TablesOrderByInput";

export type TablesFindManyArgs = {
  where?: TablesWhereInput;
  orderBy?: Array<TablesOrderByInput>;
  skip?: number;
  take?: number;
};
