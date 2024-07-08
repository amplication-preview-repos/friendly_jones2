import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { WAITER_TITLE_FIELD } from "../waiter/WaiterTitle";

export const TablesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="tableNumber" source="tableNumber" />
        <TextField label="status" source="status" />
        <ReferenceField label="Waiter" source="waiter.id" reference="Waiter">
          <TextField source={WAITER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
