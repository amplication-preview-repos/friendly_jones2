import { UserUpdateManyWithoutRolesInput } from "./UserUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  name?: string | null;
  description?: string | null;
  users?: UserUpdateManyWithoutRolesInput;
};
