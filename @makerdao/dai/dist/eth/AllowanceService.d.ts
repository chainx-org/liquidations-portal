import { PrivateService } from '@makerdao/services-core';
import BigNumber from 'bignumber.js';
export default class AllowanceService extends PrivateService {
    _shouldMinimizeAllowance: boolean;
    constructor(name?: string);
    initialize(settings: any): void;
    requireAllowance(tokenSymbol: any, receiverAddress: any, { estimate, promise }: {
        estimate?: BigNumber;
        promise: any;
    }): Promise<any>;
    removeAllowance(tokenSymbol: any, spenderAddress: any, { promise }: {
        promise: any;
    }): Promise<any>;
}
