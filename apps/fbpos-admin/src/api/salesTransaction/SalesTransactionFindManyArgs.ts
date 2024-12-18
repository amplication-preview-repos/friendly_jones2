import { SalesTransactionWhereInput } from "./SalesTransactionWhereInput";
import { SalesTransactionOrderByInput } from "./SalesTransactionOrderByInput";

export type SalesTransactionFindManyArgs = {
  where?: SalesTransactionWhereInput;
  orderBy?: Array<SalesTransactionOrderByInput>;
  skip?: number;
  take?: number;
};
