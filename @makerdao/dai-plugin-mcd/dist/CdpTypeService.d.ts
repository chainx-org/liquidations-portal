import { PublicService } from '@makerdao/services-core';
export default class CdpTypeService extends PublicService {
    reset: any;
    settings: any;
    cdpTypes: any;
    prefetch: any;
    constructor(name?: string);
    initialize(settings?: {
        cdpTypes: any;
        prefetch: any;
    }): void;
    connect(): Promise<void>;
    getCdpType(currency: any, ilk: any): any;
    resetAllCdpTypes(): void;
    prefetchAllCdpTypes(): Promise<void>;
    get totalDebtAllCdpTypes(): any;
    get totalCollateralValueAllCdpTypes(): any;
    get totalCollateralizationRatioAllCdpTypes(): any;
}
