export type Table = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  assignedWaiter: string | null;
};
