import BigNumber from 'bignumber.js';
export declare const tokenPriceLastUpdate: {
    generate: (token: any) => {
        id: string;
        contract: string;
        call: string[];
    };
    returns: (string | ((v: any) => BigNumber))[][];
};
export declare const tokenPriceUpdateInterval: {
    generate: (token: any) => {
        id: string;
        contract: string;
        call: string[];
    };
    returns: (string | ((v: any) => BigNumber))[][];
};
export declare const tokenPriceNextUpdate: {
    generate: (token: any) => {
        dependencies: any[][];
        computed: (lastUpdate: any, interval: any) => Date;
    };
};
export declare const tokenPricesNextUpdates: {
    generate: (tokenList: any) => {
        dependencies: any;
        computed: (...list: any[]) => any;
    };
};
declare const _default: {
    tokenPriceLastUpdate: {
        generate: (token: any) => {
            id: string;
            contract: string;
            call: string[];
        };
        returns: (string | ((v: any) => BigNumber))[][];
    };
    tokenPriceUpdateInterval: {
        generate: (token: any) => {
            id: string;
            contract: string;
            call: string[];
        };
        returns: (string | ((v: any) => BigNumber))[][];
    };
    tokenPriceNextUpdate: {
        generate: (token: any) => {
            dependencies: any[][];
            computed: (lastUpdate: any, interval: any) => Date;
        };
    };
    tokenPricesNextUpdates: {
        generate: (tokenList: any) => {
            dependencies: any;
            computed: (...list: any[]) => any;
        };
    };
};
export default _default;
