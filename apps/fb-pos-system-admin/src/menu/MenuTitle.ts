import { Menu as TMenu } from "../api/menu/Menu";

export const MENU_TITLE_FIELD = "qrCode";

export const MenuTitle = (record: TMenu): string => {
  return record.qrCode?.toString() || String(record.id);
};
