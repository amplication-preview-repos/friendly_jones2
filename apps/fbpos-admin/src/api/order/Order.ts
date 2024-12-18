import { JsonValue } from "type-fest";
import { Table } from "../table/Table";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  orderedItems: JsonValue;
  table?: Table | null;
};
