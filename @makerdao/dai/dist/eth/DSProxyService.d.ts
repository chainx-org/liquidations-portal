import { PrivateService } from '@makerdao/services-core';
import { Contract } from 'ethers';
export default class DSProxyService extends PrivateService {
    _currentProxy: any;
    _smartContractService: any;
    _currentAddress: any;
    constructor(name?: string);
    authenticate(): Promise<void>;
    setSmartContractService(service: any): void;
    _proxyRegistry(): any;
    _resetDefaults(newProxy: any): void;
    currentProxy(): Promise<any>;
    ensureProxy({ promise }: {
        promise: any;
    }): Promise<any>;
    build({ promise }: {
        promise: any;
    }): Promise<any>;
    execute(contract: any, method: any, args: any, options: any, address: any): any;
    getProxyAddress(providedAddress?: boolean): Promise<any>;
    getOwner(address: any): Promise<any>;
    setOwner(newOwner: any, proxyAddress?: any): Promise<any>;
    _getWrappedProxyContract(address: any): any;
    getUnwrappedProxyContract(address: any): Contract;
}
