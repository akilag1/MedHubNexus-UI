import {PharmacyInfo} from "./pharmacy-info";
import {CustomerInfo} from "./customer-info";

export class User {
  userId!: number;
  username!: string;
  email!: string;
  password!: string;
  userRole!: string;
  registeredOn!: any;
  passResetRequested!: boolean;
  active!: boolean;
  locked!: boolean;
  lastLoginDate!: any;
  lastPWChangeDate!: any;
  loginToken!: string;
  pharmacyInfo!: PharmacyInfo;
  customerInfo!: CustomerInfo;
}
