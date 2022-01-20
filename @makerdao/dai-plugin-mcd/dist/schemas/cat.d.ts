import BigNumber from 'bignumber.js';
export declare const catIlks: {
    generate: (collateralTypeName: any) => {
        id: string;
        contract: string;
        call: string[];
    };
    validate: {
        args: (name: any) => "" | "Invalid collateral type name";
    };
    returns: (string | ((v: any) => BigNumber))[][];
};
declare const _default: {
    catIlks: {
        generate: (collateralTypeName: any) => {
            id: string;
            contract: string;
            call: string[];
        };
        validate: {
            args: (name: any) => "" | "Invalid collateral type name";
        };
        returns: (string | ((v: any) => BigNumber))[][];
    };
};
export default _default;
