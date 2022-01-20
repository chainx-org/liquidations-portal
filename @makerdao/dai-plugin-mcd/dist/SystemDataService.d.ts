export default class SystemDataService extends PublicService {
    constructor(name?: string);
    getAnnualBaseRate(): Promise<number>;
    getSystemWideDebtCeiling(): Promise<number>;
    adapterAddress(ilk: any): any;
    isGlobalSettlementInvoked(): Promise<any>;
    getSystemSurplus(): Promise<any>;
    getTotalDai(): Promise<any>;
    get cat(): any;
    get jug(): any;
    get vat(): any;
    get spot(): any;
}
import { PublicService } from "@makerdao/services-core";
