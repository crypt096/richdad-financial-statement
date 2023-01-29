import mongoose, { Schema, Model } from "mongoose";
import { UserDocument } from "user-document.type";
import { UserInput } from "user-input.type";

const usersSchema = new Schema(
  {
    fullName: {
      type: Schema.Types.String,
      required: true,
    },
    email: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    password: {
      type: Schema.Types.String,
      required: true,
    },
    enabled: {
      type: Schema.Types.Boolean,
      default: true,
    },
    role: {
      type: Schema.Types.ObjectId,
      ref: "Role",
      required: true,
      index: true,
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

const User: Model<UserDocument> = mongoose.model<UserDocument>(
  "User",
  usersSchema
);

export { User, UserInput, UserDocument };
