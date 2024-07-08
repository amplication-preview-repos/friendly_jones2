import { JsonValue } from "type-fest";
import { Role } from "../role/Role";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  role?: Role | null;
};
