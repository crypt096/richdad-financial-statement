import { Router } from "express";
import { createRole } from "../controllers/role.controller";

const roleRoute = () => {
  const router = Router();

  router.post("/roles", createRole);

  router.get("/roles", (req, res) => {
    // TODO logic for retrieving roles
  });

  router.get("/roles/:id", (req, res) => {
    // TODO logic for retrieving role
  });

  router.put("/roles/:id", (req, res) => {
    // TODO logic for updating role
  });

  router.delete("/roles/:id", (req, res) => {
    // TODO logic for deleting role
  });

  return router;
};
