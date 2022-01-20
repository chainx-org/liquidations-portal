export default class SmartContractService extends PrivateService {
    constructor(name?: string);
    getContractByName: (name: any, { version, wrap }?: {
        version: any;
        wrap?: boolean;
    }) => {
        wrappedContract: any;
    };
    getContractAddressByName: (name: any, { version }?: {
        version: any;
    }) => any;
    initialize(settings?: {}): void;
    _addedContracts: {};
    _addressOverrides: any;
    getContractByAddressAndAbi(address: any, abi: any, { name, wrap }?: {
        name: any;
        wrap?: boolean;
    }): {
        wrappedContract: any;
    };
    getContractAddress(name: any, { version }?: {
        version: any;
    }): any;
    getContractAddresses(): {
        [x: string]: any;
    };
    getContract(name: any, { version, wrap }?: {
        version: any;
        wrap?: boolean;
    }): {
        wrappedContract: any;
    };
    lookupContractName(address: any): string;
    hasContract(name: any): boolean;
    getWeb3ContractByName(name: any): any;
    _getContractInfo(name: any, version: any): any;
    _getAllContractInfo(): any;
    _contractInfoCache: {};
}
import { PrivateService } from "@makerdao/services-core";
