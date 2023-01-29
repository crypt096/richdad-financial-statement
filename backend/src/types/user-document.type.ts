import { Document } from "mongoose";

export type UserDocument = Document & {
  fullName: string;
  email: string;
  password: string;
  enabled: string;
  role: string;
};
