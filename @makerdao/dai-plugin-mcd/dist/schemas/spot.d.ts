import { PRICE_FEED_ADDRESS, LIQUIDATION_RATIO } from './_constants';
export declare const spotIlks: {
    generate: (collateralTypeName: any) => {
        id: string;
        contract: string;
        call: string[];
        transforms: {
            liquidationRatio: (liqRatio: any) => any;
        };
    };
    validate: {
        args: (name: any) => "" | "Invalid collateral type name";
        priceFeedAddress: (result: any, [name]: [any]) => string;
        liquidationRatio: (result: any, [name]: [any]) => string;
    };
    returns: string[][];
};
export declare const spotPar: {
    generate: () => {
        id: string;
        contract: string;
        call: string[];
    };
    returns: (string | ((v: any) => any))[][];
};
declare const _default: {
    spotIlks: {
        generate: (collateralTypeName: any) => {
            id: string;
            contract: string;
            call: string[];
            transforms: {
                liquidationRatio: (liqRatio: any) => any;
            };
        };
        validate: {
            args: (name: any) => "" | "Invalid collateral type name";
            priceFeedAddress: (result: any, [name]: [any]) => string;
            liquidationRatio: (result: any, [name]: [any]) => string;
        };
        returns: string[][];
    };
    spotPar: {
        generate: () => {
            id: string;
            contract: string;
            call: string[];
        };
        returns: (string | ((v: any) => any))[][];
    };
};
export default _default;
