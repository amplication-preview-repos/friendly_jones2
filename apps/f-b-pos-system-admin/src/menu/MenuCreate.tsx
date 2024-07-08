import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MenuCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="qrCodeUrl" source="qrCodeUrl" />
        <div />
      </SimpleForm>
    </Create>
  );
};
