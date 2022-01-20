export default class Auction {
    constructor(ilk: any, smartContractService: any);
    contract: any;
    getMaxBidLifetime(): Promise<number>;
    getMaxAuctionDuration(): Promise<number>;
    getMinBidIncrease(): Promise<number>;
}
