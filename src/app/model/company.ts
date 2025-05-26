import { Address } from "./address";
import { HrDetails } from "./hr-details";

export interface Company {
    id:number;
    CompanyName:string;
    CompanyRegistrationNo:string;
    AddressList:Address[];
    HrDetailsList:HrDetails[];
}
