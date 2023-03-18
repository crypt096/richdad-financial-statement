import { Dividend } from "./dividend.interface";
import { Interest } from "./interest.interface";

export interface Income {
  salary: number;
  interests: Interest[];
  dividends: Dividend[];
}