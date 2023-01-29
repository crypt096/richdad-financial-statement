export type RoleDocument = Document & {
  name: string;
  description: string | null;
};
