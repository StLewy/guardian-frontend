import {Guardian} from "./guardian";

export interface Needy {
  id: number;
  name: string;
  bankAccount: string;
  cityUA: string;
  cityPL: string;
  description: string;
  guardian:Guardian;
  status: string;
  creation: any;
  update: any;
}
