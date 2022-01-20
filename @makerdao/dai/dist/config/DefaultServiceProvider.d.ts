import { ServiceProvider } from '@makerdao/services-core';
export declare const resolver: {
    defaults: {
        accounts: string;
        allowance: string;
        cache: string;
        event: string;
        gas: string;
        multicall: string;
        nonce: string;
        proxy: string;
        smartContract: string;
        timer: string;
        token: string;
        transactionManager: string;
        web3: string;
    };
    disabled: {
        event: string;
    };
};
export default class DefaultServiceProvider extends ServiceProvider {
    constructor(config?: any);
}
