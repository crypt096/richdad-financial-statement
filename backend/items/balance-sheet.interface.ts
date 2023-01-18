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

  }
}