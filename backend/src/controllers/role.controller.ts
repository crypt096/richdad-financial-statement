import { Request, Response } from "express";
import { Role, RoleInput } from "../models/role.model";

/**
 * @route POST /roles
 * @desc Create a role
 * @return {Object} role
 */
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

/**
 * @route GET /roles
 * @desc Get all roles
 * @return {Object} roles
 */
const getAllRoles = async (req: Request, res: Response) => {
  const roles = await Role.find().sort("-createdAt").exec();

  return res.status(200).json({ data: roles });
};

/**
 * @route GET /roles/:id
 * @desc Get a role
 * @return {Object} role
 */
const getRole = async (req: Request, res: Response) => {
  const { id } = req.params;

  const role = await Role.findOne({ _id: id });

  if (!role) {
    return res.status(404).json({ message: `Role with id "${id}" not found.` });
  }

  return res.status(200).json({ data: role });
};

/**
 * @route PUT /roles/:id
 * @desc Update a role
 * @return {Object} role
 */
const updateRole = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { description, name } = req.body;

  const role = await Role.findOne({ _id: id });

  if (!role) {
    return res.status(404).json({ message: `Role with id "${id}" not found.` });
  }

  if (!name || !description) {
    return res
      .status(422)
      .json({ message: "The fields name and description are required" });
  }

  await Role.updateOne({ _id: id }, { name, description });

  const roleUpdated = await Role.findById(id, { name, description });

  return res.status(200).json({ data: roleUpdated });
};

/**
 * @route DELETE /roles/:id
 * @desc Delete a role
 * @return {Object} message
 */
const deleteRole = async (req: Request, res: Response) => {
  const { id } = req.params;

  await Role.findByIdAndDelete(id);

  return res.status(200).json({ message: "Role deleted successfully." });
};

export { createRole, getAllRoles, getRole, updateRole, deleteRole };
