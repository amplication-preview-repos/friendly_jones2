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
        <TextField label="saleId" source="saleId" />
        <TextField label="date" source="date" />
        <TextField label="totalAmount" source="totalAmount" />
        <TextField label="restaurant" source="restaurant" />
      </SimpleShowLayout>
    </Show>
  );
};
