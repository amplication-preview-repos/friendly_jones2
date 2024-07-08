import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const InventoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="itemName" source="itemName" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <NumberInput step={1} label="alerts" source="alerts" />
        <TextInput label="restaurant" source="restaurant" />
      </SimpleForm>
    </Create>
  );
};
