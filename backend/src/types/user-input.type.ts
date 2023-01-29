import { UserDocument } from "./user-document.type";

export type UserInput = {
  fullName: UserDocument["fullName"];
  email: UserDocument["email"];
  password: UserDocument["password"];
  enabled: UserDocument["enabled"];
  role: UserDocument["role"];
};
