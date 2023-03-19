import mongoose, { Schema, Model } from "mongoose";
import { FinancialStatementDocument } from "financial-statement-document.type";
import { FinancialStatementInput } from "financial-statement-input.type";

const financialStatementSchema = new Schema({
  id: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  incomeStatement: {
    income: {
      type: Schema.Types.Mixed,
    },
    expenses: {
      type: Schema.Types.Mixed,
    }
  },
  balanceSheet: {
    assets: {
      type: Schema.Types.Mixed,
    },
    liabilities: {
      type: Schema.Types.Mixed,
    }
  },
  passiveIncome: {
    type: Schema.Types.Number,
  },
  totalIncome: {
    type: Schema.Types.Number,
  },
  numberOfChildren: {
    type: Schema.Types.Number,
  },
  perChildExpense: {
    type: Schema.Types.Number,
  },
  totalExpenses: {
    type: Schema.Types.Number,
  },
  monthlyCashflow: {
    type: Schema.Types.Number,
  }
});

const FinancialStatement: Model<FinancialStatementDocument> = mongoose.model<FinancialStatementDocument>(
  "FinancialStatement",
  financialStatementSchema
);

export { FinancialStatement, FinancialStatementInput, FinancialStatementDocument };