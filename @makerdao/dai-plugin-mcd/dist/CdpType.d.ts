export default class CdpType {
    _cdpTypeService: any;
    _systemData: any;
    _web3Service: any;
    currency: any;
    decimals: any;
    ilk: any;
    _ilkBytes: any;
    cache: any;
    _prefetchPromise: any;
    constructor(cdpTypeService: any, { currency, ilk, decimals }: {
        currency: any;
        ilk: any;
        decimals: any;
    }, options?: {
        prefetch: boolean;
    });
    get totalCollateral(): any;
    get totalDebt(): any;
    get debtCeiling(): any;
    get liquidationRatio(): any;
    get price(): any;
    get liquidationPenalty(): number;
    get annualStabilityFee(): any;
    ilkInfo(contract?: string): Promise<any>;
    get _pipAddress(): any;
    prefetch(): Promise<any>;
    reset(): Promise<void>;
    _getCached(name: any): any;
}
