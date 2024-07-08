import { InputJsonValue } from "../../types";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  role?: RoleWhereUniqueInput | null;
};
