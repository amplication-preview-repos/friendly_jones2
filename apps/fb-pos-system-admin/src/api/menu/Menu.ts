import { JsonValue } from "type-fest";

export type Menu = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  qrCode: string | null;
  menuItems: JsonValue;
  restaurant: string | null;
};
