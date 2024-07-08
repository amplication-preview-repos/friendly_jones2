import { CashierWhereInput } from "./CashierWhereInput";
import { CashierOrderByInput } from "./CashierOrderByInput";

export type CashierFindManyArgs = {
  where?: CashierWhereInput;
  orderBy?: Array<CashierOrderByInput>;
  skip?: number;
  take?: number;
};
