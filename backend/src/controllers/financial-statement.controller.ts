import { Request, Response } from "express";
import { FinancialStatement, FinancialStatementInput } from "../models/financial-statement.model";

/**
 * @route GET /financial-statement
 * @desc Get all financial statement information
 * @return {Object} financial statement
 */
