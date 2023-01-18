export interface IncomeStatement {
  id: string;
  income: {
    salary: number;
    interest: number;
    dividends: number;
    realEstate: number;
    business: number;
  },
  expenses: {
    taxes: number;
    homeMortgagePayment: number;
    schoolLoanPayment: number;
    carLoanPayment: number;
    creditCardPayment: number;
    retailPayment: number;
    otherExpenses: number;
    childExpenses: number;
    loanPayment: number;
  }
}