import { PharmacyInfo } from "./pharmacy-info";

export class Category {
    id!: number;
    name!: string;
    code!: string;
    description!: string;
    pharmacyInfo!: PharmacyInfo;
  }