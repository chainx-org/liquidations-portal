export default class AuctionService extends PublicService {
    constructor(name?: string);
    getAuction(ilk: any): Auction;
}
import { PublicService } from "@makerdao/services-core";
import Auction from "./Auction";
