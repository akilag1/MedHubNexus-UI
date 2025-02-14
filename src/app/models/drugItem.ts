import { PharmacyInfo } from "./pharmacy-info";

export class DrugItem {
  id!: number;
  name!: string;
  code!: string;
  description!: string;
  unitPrice!: number;
  totalQty!: number;
  availableQty!: number;
  brand!: {};
  category!: {};
  pharmacyInfo!: {};
}
