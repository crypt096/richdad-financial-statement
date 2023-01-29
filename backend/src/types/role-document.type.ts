import { Document } from "mongoose";

export type RoleDocument = Document & {
  name: string;
  description: string | null;
};
