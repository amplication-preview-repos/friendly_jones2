import { Tables } from "../tables/Tables";

export type Waiter = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  phoneNumber: string | null;
  restaurant: string | null;
  tablesItems?: Array<Tables>;
};
