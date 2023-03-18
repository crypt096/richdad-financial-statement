import { Income } from "./income-statement/income/income.interface";
import { Expenses } from "./income-statement/expenses/expenses.interface";
import { Asset } from "./balance-sheet/assets/asset.interface";
import { Liability } from "./balance-sheet/liabilities/liability.interface";

export interface FinancialStatement {
  id: string;
  incomeStatement: {
    income: Income;
    expenses: Expenses;
  },
  balanceSheet: {
    assets: Asset;
    liabilities: Liability;
  }
}