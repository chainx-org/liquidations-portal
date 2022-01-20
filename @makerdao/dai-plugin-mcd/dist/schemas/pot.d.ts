import { fromRay, fromWei } from '../utils';
export declare const potPie: {
    generate: () => {
        id: string;
        contract: string;
        call: string[];
    };
    returns: (string | typeof fromWei)[][];
};
export declare const potpie: {
    generate: (address: any) => {
        id: string;
        contract: string;
        call: any[];
    };
    validate: {
        args: (address: any) => string;
    };
    returns: (string | typeof fromWei)[][];
};
export declare const potDsr: {
    generate: () => {
        id: string;
        contract: string;
        call: string[];
    };
    returns: (string | typeof fromRay)[][];
};
export declare const potChi: {
    generate: () => {
        id: string;
        contract: string;
        call: string[];
    };
    returns: (string | typeof fromRay)[][];
};
export declare const potRho: {
    generate: () => {
        id: string;
        contract: string;
        call: string[];
    };
    returns: (string | ((val: any) => Date))[][];
};
export declare const annualDaiSavingsRate: {
    generate: () => {
        dependencies: () => string[][];
        computed: (daiSavingsRate: any) => any;
    };
};
declare const _default: {
    potPie: {
        generate: () => {
            id: string;
            contract: string;
            call: string[];
        };
        returns: (string | typeof fromWei)[][];
    };
    potpie: {
        generate: (address: any) => {
            id: string;
            contract: string;
            call: any[];
        };
        validate: {
            args: (address: any) => string;
        };
        returns: (string | typeof fromWei)[][];
    };
    potDsr: {
        generate: () => {
            id: string;
            contract: string;
            call: string[];
        };
        returns: (string | typeof fromRay)[][];
    };
    potRho: {
        generate: () => {
            id: string;
            contract: string;
            call: string[];
        };
        returns: (string | ((val: any) => Date))[][];
    };
    potChi: {
        generate: () => {
            id: string;
            contract: string;
            call: string[];
        };
        returns: (string | typeof fromRay)[][];
    };
    annualDaiSavingsRate: {
        generate: () => {
            dependencies: () => string[][];
            computed: (daiSavingsRate: any) => any;
        };
    };
};
export default _default;
