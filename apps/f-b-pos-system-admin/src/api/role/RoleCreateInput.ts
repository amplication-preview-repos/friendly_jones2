import { UserCreateNestedManyWithoutRolesInput } from "./UserCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  name?: string | null;
  description?: string | null;
  users?: UserCreateNestedManyWithoutRolesInput;
};
