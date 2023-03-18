import { Business } from "./business.interface";
import { RealEstate } from "./real-estate.interface";

export interface Liability {
  homeMortgage: number;
  schoolLoans: number;
  carLoans: number;
  creditCards: number;
  retailDebt: number;
  realEstates: RealEstate[];
  businesses: Business[];
  loan: number;
}