import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";

import { CashierTitle } from "../cashier/CashierTitle";

export const BillingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <SelectInput
          source="paymentMethod"
          label="paymentMethod"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="billNumber" source="billNumber" />
        <TextInput label="order" source="order" />
        <ReferenceInput source="cashier.id" reference="Cashier" label="cashier">
          <SelectInput optionText={CashierTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
