import { User } from "../user/User";
import { Project } from "../project/Project";

export type Task = {
  assignedTo?: User;
  createdAt: Date;
  estimationDays: number | null;
  id: string;
  project?: Project | null;
  startDate: Date | null;
  status?: "New" | "Pending" | "Ongoing" | "Done";
  title: string;
  updatedAt: Date;
};
