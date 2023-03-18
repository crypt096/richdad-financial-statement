import { Business } from "./business.interface";
import { Dividend } from "./dividend.interface";
import { Interest } from "./interest.interface";
import { RealEstate } from "./real-estate.interface";

export interface Income {
  salary: number;
  interests: Interest[];
  dividends: Dividend[];
  realEstates: RealEstate[];
  businesses: Business[];
}