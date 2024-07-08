import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const FoodMenuCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="itemName" source="itemName" />
        <NumberInput label="price" source="price" />
        <NumberInput
          step={1}
          label="remainingQuantity"
          source="remainingQuantity"
        />
      </SimpleForm>
    </Create>
  );
};
