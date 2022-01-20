import { PROXY_ADDRESS } from './_constants';
export declare const proxyRegistryProxies: {
    generate: (address: any) => {
        id: string;
        contract: string;
        call: any[];
        transforms: {
            proxyAddress: (v: any) => any;
        };
    };
    validate: {
        args: (address: any) => string;
    };
    returns: string[][];
};
declare const _default: {
    proxyRegistryProxies: {
        generate: (address: any) => {
            id: string;
            contract: string;
            call: any[];
            transforms: {
                proxyAddress: (v: any) => any;
            };
        };
        validate: {
            args: (address: any) => string;
        };
        returns: string[][];
    };
};
export default _default;
