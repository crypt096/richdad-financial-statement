import { Router } from "express";
import {
  getAllFinancialStatement,
} from "../controllers/financial-statement.controller";

const financialStatementRoute = () => {
  const router = Router();

  router.get("/financial-statement", getAllFinancialStatement);

  return router;
};

export { financialStatementRoute };