import { Business } from "./business.interface";
import { CD } from "./cd.interface";
import { Fund } from "./fund.interface";
import { RealEstate } from "./real-estate.interface";
import { Stock } from "./stock.interface";

export interface Asset {
  savings: number;
  stocks: Stock[];
  funds: Fund[];
  cds: CD[];
  realEstates: RealEstate[];
  businesses: Business[];
}