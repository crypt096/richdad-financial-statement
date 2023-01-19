export interface BalanceSheet {
  id: string;
  assets: {
    savings: {
      stocksOrFundsOrCDs: {
        name: string;
        numberOfShares: number;
        costOrValuePerShare: number;
      },
      realEstateOrBusinesses: {
        name: string;
        downPay: number;
        cost: number;
      }
    }
  },
  liabilities: {
    homeMortgage: number;
    schoolLoans: number;
    carLoans: number;
    creditCards: number;
    retailDebt: number;
    realEstateBusiness: {
      name: string;
      mortgageOrLiability: number;
    },
    loan: number;
  }
}