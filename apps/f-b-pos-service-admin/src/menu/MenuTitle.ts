import { Menu as TMenu } from "../api/menu/Menu";

export const MENU_TITLE_FIELD = "qrCodeUrl";

export const MenuTitle = (record: TMenu): string => {
  return record.qrCodeUrl?.toString() || String(record.id);
};
