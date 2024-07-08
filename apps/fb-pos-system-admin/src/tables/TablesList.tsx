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
import { WAITER_TITLE_FIELD } from "../waiter/WaiterTitle";

export const TablesList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TablesItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="tableNumber" source="tableNumber" />
        <TextField label="status" source="status" />
        <ReferenceField label="Waiter" source="waiter.id" reference="Waiter">
          <TextField source={WAITER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
