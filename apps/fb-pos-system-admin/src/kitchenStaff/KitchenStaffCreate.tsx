import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const KitchenStaffCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <TextInput label="Restaurant" source="restaurant" />
      </SimpleForm>
    </Create>
  );
};
