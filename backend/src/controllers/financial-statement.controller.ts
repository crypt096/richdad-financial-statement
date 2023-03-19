import { Request, Response } from "express";
import { FinancialStatement, FinancialStatementInput } from "../models/financial-statement.model";

/**
 * @route POST /financial-statement
 * @desc Create a financial statement data
 * @return {Object} financial-statement
 */

const createFinancialStatement = async (req: Request, res: Response) => {
  const { id, incomeStatement, balanceSheet, passiveIncome, totalIncome, numberOfChildren, perChildExpense, totalExpenses, monthlyCashflow } = req.body;
  
  const financialStatementInput: FinancialStatementInput = {
    id,
    incomeStatement,
    balanceSheet,
    passiveIncome,
    totalIncome,
    numberOfChildren,
    perChildExpense,
    totalExpenses,
    monthlyCashflow,
  };

  const financialStatementCreated = FinancialStatement.create(financialStatementInput);

  return res.status(201).json({ data: financialStatementCreated });
}

/**
 * @route GET /financial-statement
 * @desc Get all financial statement information
 * @return {Object} financial statement
 */

const getAllFinancialStatement = async (req: Request, res: Response) => {
  const financialStatement = await FinancialStatement.find().sort("-createdAt").exec();

  return res.status(200).json({ data: financialStatement });
}

export { createFinancialStatement, getAllFinancialStatement };