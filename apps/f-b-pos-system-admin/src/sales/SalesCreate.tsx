import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const SalesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="saleDate" source="saleDate" />
        <NumberInput label="totalAmount" source="totalAmount" />
        <div />
      </SimpleForm>
    </Create>
  );
};
