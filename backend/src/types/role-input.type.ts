import { RoleDocument } from "role-document.type";

export type RoleInput = {
  name: RoleDocument["name"];
  description: RoleDocument["description"];
};
