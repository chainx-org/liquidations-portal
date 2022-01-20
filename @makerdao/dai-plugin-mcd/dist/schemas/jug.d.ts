import BigNumber from 'bignumber.js';
export declare const jugIlks: {
    generate: (collateralTypeName: any) => {
        id: string;
        contract: string;
        call: string[];
    };
    returns: (string | ((v: any) => any))[][];
};
export declare const jugBase: {
    generate: () => {
        id: string;
        contract: string;
        call: string[];
    };
    returns: (string | ((v: any) => BigNumber))[][];
};
declare const _default: {
    jugIlks: {
        generate: (collateralTypeName: any) => {
            id: string;
            contract: string;
            call: string[];
        };
        returns: (string | ((v: any) => any))[][];
    };
    jugBase: {
        generate: () => {
            id: string;
            contract: string;
            call: string[];
        };
        returns: (string | ((v: any) => BigNumber))[][];
    };
};
export default _default;
