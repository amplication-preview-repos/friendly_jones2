import { JsonValue } from "type-fest";

export type Menu = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  qrCodeUrl: string | null;
  items: JsonValue;
};
