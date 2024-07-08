import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const InventoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="itemName" source="itemName" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <NumberInput step={1} label="alerts" source="alerts" />
        <TextInput label="restaurant" source="restaurant" />
      </SimpleForm>
    </Edit>
  );
};
