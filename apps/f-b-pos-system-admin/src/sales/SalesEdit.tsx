import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const SalesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="saleDate" source="saleDate" />
        <NumberInput label="totalAmount" source="totalAmount" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
