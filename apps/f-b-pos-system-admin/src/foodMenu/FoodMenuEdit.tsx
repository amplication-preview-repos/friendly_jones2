import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const FoodMenuEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
        <NumberInput
          step={1}
          label="remainingQuantity"
          source="remainingQuantity"
        />
      </SimpleForm>
    </Edit>
  );
};
