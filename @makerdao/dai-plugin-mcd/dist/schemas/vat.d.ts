import { fromWei } from '../utils';
export declare const vatIlks: {
    generate: (ilkName: any) => {
        id: string;
        contract: string;
        call: string[];
    };
    returns: (string | ((v: any) => any))[][];
};
export declare const vatDebt: {
    generate: () => {
        id: string;
        contract: string;
        call: string[];
    };
    returns: (string | ((v: any) => any))[][];
};
export declare const vatUrns: {
    generate: (ilkName: any, urn: any) => {
        id: string;
        contract: string;
        call: any[];
    };
    returns: (string | typeof fromWei)[][];
};
export declare const vatGem: {
    generate: (ilkName: any, urn: any) => {
        id: string;
        contract: string;
        call: any[];
    };
    return: (string | typeof fromWei)[];
};
export declare const vatLine: {
    generate: () => {
        id: string;
        contract: string;
        call: string[];
    };
    returns: (string | ((v: any) => any))[][];
};
declare const _default: {
    vatIlks: {
        generate: (ilkName: any) => {
            id: string;
            contract: string;
            call: string[];
        };
        returns: (string | ((v: any) => any))[][];
    };
    vatDebt: {
        generate: () => {
            id: string;
            contract: string;
            call: string[];
        };
        returns: (string | ((v: any) => any))[][];
    };
    vatUrns: {
        generate: (ilkName: any, urn: any) => {
            id: string;
            contract: string;
            call: any[];
        };
        returns: (string | typeof fromWei)[][];
    };
    vatGem: {
        generate: (ilkName: any, urn: any) => {
            id: string;
            contract: string;
            call: any[];
        };
        return: (string | typeof fromWei)[];
    };
    vatLine: {
        generate: () => {
            id: string;
            contract: string;
            call: string[];
        };
        returns: (string | ((v: any) => any))[][];
    };
};
export default _default;
