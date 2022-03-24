import {Guardian} from "./guardian";

export interface Needy {
  id: number
  name: string;
  bankAccount: string;
  cityUA: string;
  cityPL: string;
  description: string;
  guardian:Guardian;
  statusResponese: string;
}
