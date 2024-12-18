import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const InventoryItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="quantity" source="quantity" />
        <TextField label="alertLevel" source="alertLevel" />
        <TextField label="name" source="name" />
      </SimpleShowLayout>
    </Show>
  );
};
