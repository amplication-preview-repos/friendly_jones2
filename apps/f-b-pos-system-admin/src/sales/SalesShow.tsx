import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const SalesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="saleDate" source="saleDate" />
        <TextField label="totalAmount" source="totalAmount" />
        <TextField label="itemsSold" source="itemsSold" />
      </SimpleShowLayout>
    </Show>
  );
};
