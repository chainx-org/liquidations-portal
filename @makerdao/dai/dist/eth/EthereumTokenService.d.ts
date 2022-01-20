export default class EthereumTokenService extends PrivateService {
    constructor(name?: string);
    _tokens: {
        MKR: string;
        WETH: string;
        PETH: string;
        ETH: string;
    };
    _addedTokens: {};
    initialize(settings?: {}): void;
    _addressOverrides: any;
    getTokens(): string[];
    getToken(symbol: any, version: any): EtherToken | Erc20Token;
    _getTokenInfo(symbol: any, version: any): any;
    _getNetworkMapping(networkId: any): {
        [x: string]: {
            version: number;
            address: any;
            abi: ({
                constant: boolean;
                inputs: {
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            } | {
                payable: boolean;
                stateMutability: string;
                type: string;
                constant?: undefined;
                inputs?: undefined;
                name?: undefined;
                outputs?: undefined;
                anonymous?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                constant?: undefined;
                outputs?: undefined;
                payable?: undefined;
                stateMutability?: undefined;
            })[];
            decimals: number;
        }[] | {
            version: number;
            address: any;
            abi: ({
                constant: boolean;
                inputs: {
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: any[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            } | {
                constant: boolean;
                inputs: any[];
                name: string;
                outputs: {
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                constant?: undefined;
                outputs?: undefined;
                payable?: undefined;
                stateMutability?: undefined;
            })[];
        }[] | {
            version: number;
            address: any;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                payable: boolean;
                stateMutability: string;
                type: string;
                inputs?: undefined;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
        }[] | {
            version: number;
            address: any;
            abi: ({
                constant: boolean;
                inputs: {
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
            } | {
                inputs: {
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                constant?: undefined;
                name?: undefined;
                outputs?: undefined;
            } | {
                payable: boolean;
                stateMutability: string;
                type: string;
                constant?: undefined;
                inputs?: undefined;
                name?: undefined;
                outputs?: undefined;
            })[];
        }[] | {
            version: number;
            address: any;
            abi: ({
                constant: boolean;
                inputs: {
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            } | {
                inputs: any[];
                payable: boolean;
                stateMutability: string;
                type: string;
                constant?: undefined;
                name?: undefined;
                outputs?: undefined;
                anonymous?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                constant?: undefined;
                outputs?: undefined;
                payable?: undefined;
                stateMutability?: undefined;
            })[];
        }[] | {
            version: number;
            abi: ({
                constant: boolean;
                inputs: {
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            } | {
                inputs: {
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                constant?: undefined;
                name?: undefined;
                outputs?: undefined;
                anonymous?: undefined;
            } | {
                payable: boolean;
                stateMutability: string;
                type: string;
                constant?: undefined;
                inputs?: undefined;
                name?: undefined;
                outputs?: undefined;
                anonymous?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                constant?: undefined;
                outputs?: undefined;
                payable?: undefined;
                stateMutability?: undefined;
            })[];
        }[];
        [x: number]: {
            version: number;
            address: any;
            abi: ({
                constant: boolean;
                inputs: {
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                constant?: undefined;
                outputs?: undefined;
                payable?: undefined;
                stateMutability?: undefined;
            })[];
            decimals: number;
        }[];
    };
    _selectTokenVersions(mapping: any): any[];
}
import { PrivateService } from "@makerdao/services-core";
import EtherToken from "./tokens/EtherToken";
import Erc20Token from "./tokens/Erc20Token";
