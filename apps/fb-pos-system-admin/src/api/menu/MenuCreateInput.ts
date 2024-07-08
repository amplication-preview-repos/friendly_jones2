import { InputJsonValue } from "../../types";

export type MenuCreateInput = {
  qrCode?: string | null;
  menuItems?: InputJsonValue;
  restaurant?: string | null;
};
