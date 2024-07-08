import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CASHIER_TITLE_FIELD } from "../cashier/CashierTitle";

export const BillingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Billings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="amount" source="amount" />
        <TextField label="paymentMethod" source="paymentMethod" />
        <TextField label="billNumber" source="billNumber" />
        <TextField label="order" source="order" />
        <ReferenceField label="cashier" source="cashier.id" reference="Cashier">
          <TextField source={CASHIER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
