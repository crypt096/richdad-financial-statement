import { Document } from "mongoose";
import { Income } from "../interfaces/income-statement/income/income.interface";
import { Expenses } from "../interfaces/income-statement/expenses/expenses.interface";
import { Asset } from "../interfaces/balance-sheet/assets/asset.interface";
import { Liability } from "../interfaces/balance-sheet/liabilities/liability.interface";

export type FinancialStatementDocument = Document & {
  id: string;
  incomeStatement: {
    income: Income;
    expenses: Expenses;
  },
  balanceSheet: {
    assets: Asset;
    liabilities: Liability;
  },
  passiveIncome: number;
  totalIncome: number;
  numberOfChildren: number;
  perChildExpense: number;
  totalExpenses: number;
  monthlyCashflow: number;
}