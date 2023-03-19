import { Request, Response } from "express";
import { FinancialStatement, FinancialStatementInput } from "../models/financial-statement.model";

/**
 * @route GET /financial-statement
 * @desc Get all financial statement information
 * @return {Object} financial statement
 */

const getAllFinancialStatement = async (req: Request, res: Response) => {
  const financialStatement = await FinancialStatement.find().sort("-createdAt").exec();

  return res.status(200).json({ data: financialStatement });
}

export { getAllFinancialStatement };