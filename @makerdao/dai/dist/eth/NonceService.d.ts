export default class NonceService extends PublicService {
    constructor(name?: string);
    _counts: {};
    connect(): Promise<void>;
    _accountsService: any;
    _web3Service: any;
    _getTxCount(address: any): Promise<any>;
    _compareNonceCounts(txCount: any, address: any): any;
    _removeDuplicateAddresses(accounts: any): any[];
    setCounts(): Promise<any>;
    getNonce(): Promise<any>;
}
import { PublicService } from "@makerdao/services-core";
