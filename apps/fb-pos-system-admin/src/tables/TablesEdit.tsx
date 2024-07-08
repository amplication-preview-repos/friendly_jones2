import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { WaiterTitle } from "../waiter/WaiterTitle";

export const TablesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="tableNumber" source="tableNumber" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="waiter.id" reference="Waiter" label="Waiter">
          <SelectInput optionText={WaiterTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
