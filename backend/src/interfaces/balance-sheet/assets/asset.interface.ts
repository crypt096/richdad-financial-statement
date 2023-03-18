import { CD } from "./cd.interface";
import { Fund } from "./fund.interface";
import { Stock } from "./stock.interface";

export interface Asset {
  savings: number;
  stocks: Stock[];
  funds: Fund[];
  cds: CD[];
}