import { Router } from "express";
import {
  createFinancialStatement,
  getAllFinancialStatement,
} from "../controllers/financial-statement.controller";

const financialStatementRoute = () => {
  const router = Router();

  router.post("/financial-statement", createFinancialStatement);
  router.get("/financial-statement", getAllFinancialStatement);

  return router;
};

export { financialStatementRoute };