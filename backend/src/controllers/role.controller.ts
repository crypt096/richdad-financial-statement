import { Request, Response } from "express";
import { Role, RoleInput } from "../models/role.model";

const createRole = async (req: Request, res: Response) => {
  const { description, name } = req.body;

  if (!name || !description) {
    return res.status(422).json({
      message: "The fields name and description are required",
    });
  }

  const roleInput: RoleInput = {
    name,
    description,
  };

  const roleCreated = Role.create(roleInput);

  return res.status(201).json({ data: roleCreated });
};

const getAllRoles = async (req: Request, res: Response) => {
  const roles = await Role.find().sort("-createdAt").exec();

  return res.status(200).json({ data: roles });
};

export { createRole, getAllRoles };
