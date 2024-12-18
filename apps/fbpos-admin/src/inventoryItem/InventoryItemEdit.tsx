import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const InventoryItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="quantity" source="quantity" />
        <NumberInput step={1} label="alertLevel" source="alertLevel" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
