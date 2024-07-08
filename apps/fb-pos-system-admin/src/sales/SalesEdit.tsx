import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const SalesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="saleId" source="saleId" />
        <DateTimeInput label="date" source="date" />
        <NumberInput label="totalAmount" source="totalAmount" />
        <TextInput label="restaurant" source="restaurant" />
      </SimpleForm>
    </Edit>
  );
};
