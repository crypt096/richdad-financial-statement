import { FinancialStatementDocument } from "financial-statement-document.type";

export type FinancialStatementInput = {
  id: FinancialStatementDocument["id"];
  incomeStatement: {
    income: FinancialStatementDocument["incomeStatement"]["income"];
    expenses: FinancialStatementDocument["incomeStatement"]["expenses"];
  },
  balanceSheet: {
    assets: FinancialStatementDocument["balanceSheet"]["assets"];
    liabilities: FinancialStatementDocument["balanceSheet"]["liabilities"];
  },
  passiveIncome: FinancialStatementDocument["passiveIncome"];
  totalIncome: FinancialStatementDocument["totalIncome"];
  numberOfChildren: FinancialStatementDocument["numberOfChildren"];
  perChildExpense: FinancialStatementDocument["perChildExpense"];
  totalExpenses: FinancialStatementDocument["totalExpenses"];
  monthlyCashflow: FinancialStatementDocument["monthlyCashflow"];
}