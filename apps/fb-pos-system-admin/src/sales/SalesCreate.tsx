import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const SalesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="saleId" source="saleId" />
        <DateTimeInput label="date" source="date" />
        <NumberInput label="totalAmount" source="totalAmount" />
        <TextInput label="restaurant" source="restaurant" />
      </SimpleForm>
    </Create>
  );
};
