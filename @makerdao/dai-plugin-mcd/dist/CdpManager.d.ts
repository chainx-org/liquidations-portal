import { LocalService } from '@makerdao/services-core';
import { ManagedCdpClass } from './ManagedCdp';
export default class CdpManager extends LocalService {
    _getCdpIdsPromises: any;
    _getUrnPromises: any;
    _instanceCache: any;
    _eventHistoryCache: any;
    constructor(name?: string);
    getCdpIds(proxyAddress: any, descending?: boolean): Promise<any>;
    getCdp(id: any, options: any): Promise<any>;
    getIlkForCdp(id: any): Promise<string>;
    getCombinedDebtValue(proxyAddress: any, descending?: boolean): Promise<unknown>;
    open(ilk: any, { promise, cache }: {
        promise: any;
        cache?: boolean;
    }): Promise<ManagedCdpClass>;
    reclaimCollateral(id: any, dink: any, { promise }: {
        promise: any;
    }): Promise<any>;
    openLockAndDraw(ilk: any, lockAmount: any, drawAmount: any, { promise, cache }: {
        promise: any;
        cache?: boolean;
    }): Promise<ManagedCdpClass>;
    lockAndDraw(id: any, ilk: any, lockAmount: any, drawAmount: any, { promise }: {
        promise: any;
    }): Promise<any>;
    lock(id: any, ilk: any, lockAmount: any, owner: any, { promise }: {
        promise: any;
    }): Promise<any>;
    draw(id: any, ilk: any, drawAmount: any, { promise }: {
        promise: any;
    }): Promise<any>;
    wipeAndFree(id: any, ilk: any, wipeAmount: any, freeAmount: any, { promise }: {
        promise: any;
    }): any;
    wipe(id: any, wipeAmount: any, owner: any, { promise }: {
        promise: any;
    }): Promise<any>;
    unsafeWipe(id: any, wipeAmount: any, { promise }: {
        promise: any;
    }): any;
    wipeAll(id: any, owner: any, { promise }?: {
        promise?: any;
    }): Promise<any>;
    unsafeWipeAll(id: any, { promise }?: {
        promise?: any;
    }): any;
    wipeAllAndFree(id: any, ilk: any, freeAmount: any, { promise }: {
        promise: any;
    }): any;
    give(id: any, address: any, { promise }: {
        promise: any;
    }): any;
    giveToProxy(id: any, address: any, { promise }: {
        promise: any;
    }): any;
    getUrn(id: any): any;
    getOwner(id: any): any;
    getIdBytes(id: any, prefix?: boolean): string;
    get proxyActions(): any;
    get vat(): any;
    reset(): void;
    get _manager(): any;
    get _managerAddress(): any;
    _contractAddress(name: any): any;
    _adapterAddress(ilk: any): any;
    _precision(amount: any, ilk: any): any;
    _getFromInstanceCache(id: any, enabled: any): any;
    _putInInstanceCache(id: any, instance: any, enabled: any): void;
    getNewCdpId(txo: any): number;
    getEventHistory(managedCdp: any): Promise<any>;
    resetEventHistoryCache(id?: any): void;
}
export declare function setMethod(isEth: any, isGnt: any, id: any): "lockETHAndDraw" | "openLockETHAndDraw" | "openLockGNTAndDraw" | "lockGemAndDraw" | "openLockGemAndDraw";
export declare function transferToBag(lockAmount: any, proxyAddress: any, cdpMgr: any): Promise<any>;
