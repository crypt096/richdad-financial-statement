import mongoose, { Schema, Model } from "mongoose";
import { RoleDocument } from "role-document.type";
import { RoleInput } from "role-input.type";

const roleSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    description: {
      type: Schema.Types.String,
      default: null,
    },
  },
  {
    collection: "roles",
    timestamps: true,
  }
);

const Role: Model<RoleDocument> = mongoose.model<RoleDocument>(
  "Role",
  roleSchema
);

export { Role, RoleInput, RoleDocument };
