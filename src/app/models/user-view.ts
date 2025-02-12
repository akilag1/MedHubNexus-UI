import {CustomerInfo} from "./customer-info";
import {PharmacyInfo} from "./pharmacy-info";

export class UserView {
  userId!: number;
  email!: string;
  username!: string;
  userRole!: string;
  active!: boolean;
  locked!: boolean;
  loginToken!: string;
  accessToken!: string;
  lastLoginDate!: any;
  lastPWChangeDate!: any;
  passResetRequested!: boolean;
  customerInfo!: CustomerInfo;
  pharmacyInfo!: PharmacyInfo;
}
