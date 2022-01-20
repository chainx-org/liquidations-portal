export declare const getCdps: {
    generate: (vaultManagerAddress: any, proxyAddress: any, descending: any) => {
        id: string;
        contract: string;
        call: any[];
    };
    validate: {
        args: (_: any, address: any) => string;
    };
    returns: (string | ((v: any) => any))[][];
};
declare const _default: {
    getCdps: {
        generate: (vaultManagerAddress: any, proxyAddress: any, descending: any) => {
            id: string;
            contract: string;
            call: any[];
        };
        validate: {
            args: (_: any, address: any) => string;
        };
        returns: (string | ((v: any) => any))[][];
    };
};
export default _default;
