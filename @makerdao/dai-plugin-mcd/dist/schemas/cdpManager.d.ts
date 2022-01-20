import { bytesToString } from '../utils';
import BigNumber from 'bignumber.js';
import { VAULT_TYPE } from './_constants';
export declare const cdpManagerUrns: {
    generate: (id: any) => {
        id: string;
        contract: string;
        call: (string | number)[];
    };
    returns: string[];
};
export declare const cdpManagerIlks: {
    generate: (id: any) => {
        id: string;
        contract: string;
        call: (string | number)[];
    };
    validate: {
        args: (id: any) => string;
        vaultType: (vaultType: any) => "" | "Vault does not exist";
    };
    returns: (string | typeof bytesToString)[][];
};
export declare const cdpManagerCdpi: {
    generate: () => {
        id: string;
        contract: string;
        call: string[];
    };
    returns: (string | ((v: any) => BigNumber))[][];
};
export declare const cdpManagerOwner: {
    generate: (id: any) => {
        id: string;
        contract: string;
        call: any[];
    };
    returns: string[][];
};
declare const _default: {
    cdpManagerUrns: {
        generate: (id: any) => {
            id: string;
            contract: string;
            call: (string | number)[];
        };
        returns: string[];
    };
    cdpManagerIlks: {
        generate: (id: any) => {
            id: string;
            contract: string;
            call: (string | number)[];
        };
        validate: {
            args: (id: any) => string;
            vaultType: (vaultType: any) => "" | "Vault does not exist";
        };
        returns: (string | typeof bytesToString)[][];
    };
    cdpManagerCdpi: {
        generate: () => {
            id: string;
            contract: string;
            call: string[];
        };
        returns: (string | ((v: any) => BigNumber))[][];
    };
    cdpManagerOwner: {
        generate: (id: any) => {
            id: string;
            contract: string;
            call: any[];
        };
        returns: string[][];
    };
};
export default _default;
