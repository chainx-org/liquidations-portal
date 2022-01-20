import BigNumber from 'bignumber.js';
import { TOKEN_BALANCE } from './_constants';
export declare const ALLOWANCE_AMOUNT: BigNumber;
export declare const tokenBalance: {
    generate: (address: any, symbol: any) => {
        id: string;
        contract: any;
        call: any[];
        transforms: {
            tokenBalance: (v: any) => any;
        };
    };
    returns: string[];
};
export declare const tokenBalances: {
    generate: (address: any, symbols: any) => {
        dependencies: any;
        computed: (...balances: any[]) => any[];
    };
};
export declare const tokenAllowanceBase: {
    generate: (address: any, proxyAddress: any, symbol: any) => {
        id: string;
        contract: any;
        call: any[];
    };
    returns: (string | ((v: any) => BigNumber))[][];
};
export declare const tokenAllowance: {
    generate: (address: any, proxyAddress: any, symbol: any) => {
        dependencies: any[][];
        computed: (v: any) => any;
    };
    validate: {
        args: (address: any, proxyAddress: any) => string;
    };
};
export declare const adapterBalance: {
    generate: (collateralTypeName: any) => {
        dependencies: ({ get }: {
            get: any;
        }) => any[][];
        computed: (v: any) => any;
    };
};
declare const _default: {
    tokenBalance: {
        generate: (address: any, symbol: any) => {
            id: string;
            contract: any;
            call: any[];
            transforms: {
                tokenBalance: (v: any) => any;
            };
        };
        returns: string[];
    };
    tokenAllowanceBase: {
        generate: (address: any, proxyAddress: any, symbol: any) => {
            id: string;
            contract: any;
            call: any[];
        };
        returns: (string | ((v: any) => BigNumber))[][];
    };
    adapterBalance: {
        generate: (collateralTypeName: any) => {
            dependencies: ({ get }: {
                get: any;
            }) => any[][];
            computed: (v: any) => any;
        };
    };
    tokenAllowance: {
        generate: (address: any, proxyAddress: any, symbol: any) => {
            dependencies: any[][];
            computed: (v: any) => any;
        };
        validate: {
            args: (address: any, proxyAddress: any) => string;
        };
    };
    tokenBalances: {
        generate: (address: any, symbols: any) => {
            dependencies: any;
            computed: (...balances: any[]) => any[];
        };
    };
};
export default _default;
