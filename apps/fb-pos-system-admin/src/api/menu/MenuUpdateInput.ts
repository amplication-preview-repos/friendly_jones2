import { InputJsonValue } from "../../types";

export type MenuUpdateInput = {
  qrCode?: string | null;
  menuItems?: InputJsonValue;
  restaurant?: string | null;
};
