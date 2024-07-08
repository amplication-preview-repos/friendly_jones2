import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const OwnerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
