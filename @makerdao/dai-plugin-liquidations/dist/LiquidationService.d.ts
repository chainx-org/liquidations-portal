import { PublicService } from '@makerdao/services-core';
import BigNumber from 'bignumber.js';
export declare const RAD: BigNumber;
export declare const WAD: BigNumber;
export declare const RAY: BigNumber;
export declare const nullBytes = "0x";
export declare function stringToBytes(str: any): string;
export default class LiquidationService extends PublicService {
    vulcanize: boolean;
    serverUrl: string;
    constructor(name?: string);
    initialize(settings: any): void;
    connect(): void;
    _buildUnsafeUrnQuery(ilk: any): string;
    _buildAllClipsQuery(ilk: any): string;
    _allDustQuery(): string;
    _buildMedianizerQuery(ilk: any): string;
    getQueryResponse(serverUrl: any, query: any, variables?: any): Promise<any>;
    getUnsafeVaults(ilks: any): Promise<any>;
    getAllClips(ilk: any): Promise<any>;
    getAllDusts(): Promise<any>;
    getPrice(ilk: any): Promise<BigNumber>;
    take(ilk: any, auctionId: any, amount: any, maxPrice: any, address: any, { promise }: {
        promise: any;
    }): Promise<any>;
    kicks(ilk: any): Promise<any>;
    active(ilk: any, index: any): Promise<any>;
    sales(ilk: any, id: any): Promise<any>;
    count(ilk: any): Promise<any>;
    list(ilk: any): Promise<any>;
    getStatus(ilk: any, auctionId: any): Promise<any>;
    getHoleAndDirtForIlk(ilk: any): Promise<{
        hole: BigNumber;
        dirt: BigNumber;
        diff: BigNumber;
    }>;
    getHoleAndDirt(): Promise<{
        hole: BigNumber;
        dirt: BigNumber;
        diff: BigNumber;
    }>;
    getChost(ilk: any): Promise<BigNumber>;
    getTail(ilk: any): Promise<any>;
    getCusp(ilk: any): Promise<BigNumber>;
    joinDaiToAdapter(amount: any, { promise }: {
        promise: any;
    }): Promise<any>;
    exitDaiFromAdapter(amount: any, { promise }: {
        promise: any;
    }): Promise<any>;
    exitGemFromAdapter(ilk: any, amount: any, { promise }: {
        promise: any;
    }): Promise<any>;
    bark(ilk: any, urn: any, { promise }: {
        promise: any;
    }): Promise<number>;
    _clipperContractByIlk(ilk: any): any;
    _dogContract(): any;
    _joinDaiAdapter(): any;
    _joinGemAdapter(ilk: any): any;
}
