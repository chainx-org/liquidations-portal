import CdpManager from './CdpManager';
import SavingsService from './SavingsService';
import CdpTypeService from './CdpTypeService';
import AuctionService from './AuctionService';
import SystemDataService from './SystemDataService';
import BigNumber from 'bignumber.js';
export declare const ServiceRoles: {
    CDP_MANAGER: string;
    CDP_TYPE: string;
    AUCTION: string;
    SYSTEM_DATA: string;
    SAVINGS: string;
};
export * from './tokens';
export declare const ALLOWANCE_AMOUNT: BigNumber;
export declare const McdPlugin: {
    addConfig: (_: any, { cdpTypes, addressOverrides, prefetch }?: {
        cdpTypes?: {
            currency: any;
            ilk: string;
            address?: string;
            decimals?: number;
            abi?: any;
        }[];
        addressOverrides?: any;
        prefetch?: boolean;
    }) => {
        [x: string]: string[] | typeof CdpManager | typeof SavingsService | typeof AuctionService | typeof SystemDataService | {
            addContracts: {};
            erc20?: undefined;
        } | {
            erc20: ({
                currency: any;
                abi: any;
                address: any;
                decimals: any;
            } | {
                currency: any;
                address: any;
                abi?: undefined;
            } | {
                currency: any;
                address: any;
                abi: ({
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
                    anonymous?: undefined;
                    inputs?: undefined;
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
            })[];
            addContracts?: undefined;
        } | (typeof CdpTypeService | {
            cdpTypes: {
                currency: any;
                ilk: string;
                address?: string;
                decimals?: number;
                abi?: any;
            }[];
            prefetch: boolean;
        })[];
        smartContract: {
            addContracts: {};
        };
        token: {
            erc20: ({
                currency: any;
                abi: any;
                address: any;
                decimals: any;
            } | {
                currency: any;
                address: any;
                abi?: undefined;
            } | {
                currency: any;
                address: any;
                abi: ({
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
                    anonymous?: undefined;
                    inputs?: undefined;
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
            })[];
        };
        additionalServices: string[];
    };
};
export default McdPlugin;
