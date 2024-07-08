import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { CASHIER_TITLE_FIELD } from "../cashier/CashierTitle";

export const BillingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="amount" source="amount" />
        <TextField label="paymentMethod" source="paymentMethod" />
        <TextField label="billNumber" source="billNumber" />
        <TextField label="order" source="order" />
        <ReferenceField label="cashier" source="cashier.id" reference="Cashier">
          <TextField source={CASHIER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
