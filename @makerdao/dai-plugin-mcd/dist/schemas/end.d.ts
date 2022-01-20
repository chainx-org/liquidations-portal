export declare const endLive: {
    generate: () => {
        id: string;
        contract: string;
        call: string[];
    };
    returns: (string | ((val: any) => any))[][];
};
export declare const endWhen: {
    generate: () => {
        id: string;
        contract: string;
        call: string[];
    };
    returns: (string | ((val: any) => Date))[][];
};
declare const _default: {
    endLive: {
        generate: () => {
            id: string;
            contract: string;
            call: string[];
        };
        returns: (string | ((val: any) => any))[][];
    };
    endWhen: {
        generate: () => {
            id: string;
            contract: string;
            call: string[];
        };
        returns: (string | ((val: any) => Date))[][];
    };
};
export default _default;
