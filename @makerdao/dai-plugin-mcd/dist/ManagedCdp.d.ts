export declare class ManagedCdpClass {
    id: any;
    ilk: any;
    _cdpManager: any;
    type: any;
    currency: any;
    cache: any;
    _urnInfoPromise: any;
    constructor(id: any, ilk: any, cdpManager: any, options?: {
        prefetch: boolean;
    });
    get collateralAmount(): any;
    get collateralValue(): any;
    get debtValue(): any;
    get collateralizationRatio(): any;
    get liquidationPrice(): any;
    get isSafe(): any;
    get minSafeCollateralAmount(): any;
    get collateralAvailable(): any;
    get daiAvailable(): any;
    getOwner(): any;
    getUrn(): any;
    lockCollateral(amount: any): any;
    drawDai(amount: any, { promise }: {
        promise: any;
    }): any;
    lockAndDraw(lockAmount: any, drawAmount: any, { promise }: {
        promise: any;
    }): any;
    wipeDai(amount: any): any;
    unsafeWipe(amount: any): any;
    wipeAll(): any;
    unsafeWipeAll(): any;
    freeCollateral(amount: any): any;
    give(address: any): any;
    giveToProxy(address: any): any;
    wipeAndFree(wipeAmount?: any, freeAmount?: any, { promise }?: {
        promise?: any;
    }): any;
    wipeAllAndFree(freeAmount: any, { promise }: {
        promise: any;
    }): any;
    _getUrnInfo(): any;
    _getCached(name: any): any;
    prefetch(): Promise<[any, any]>;
    reset(): void;
}
declare const _default: {
    create: (createTxo: any, ilk: any, cdpManager: any) => Promise<ManagedCdpClass>;
};
export default _default;
