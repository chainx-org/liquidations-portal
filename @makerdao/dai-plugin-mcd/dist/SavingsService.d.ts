import { PublicService } from '@makerdao/services-core';
import BigNumber from 'bignumber.js';
export default class SavingsService extends PublicService {
    _eventHistoryCache: any;
    constructor(name?: string);
    join(amountInDai: any, { promise }: {
        promise: any;
    }): Promise<any>;
    exit(amountInDai: any, { promise }: {
        promise: any;
    }): Promise<any>;
    exitAll({ promise }: {
        promise: any;
    }): Promise<any>;
    balance(): Promise<any>;
    balanceOf(guy: any): Promise<any>;
    getTotalDai(): Promise<any>;
    getYearlyRate(): Promise<BigNumber>;
    chi(): Promise<BigNumber>;
    get _proxyActions(): any;
    get _pot(): any;
    get _daiAdapterAddress(): any;
    getEventHistory(address: any): Promise<any>;
    getEarningsToDate(address: any): Promise<any>;
    resetEventHistoryCache(address?: any): void;
}
