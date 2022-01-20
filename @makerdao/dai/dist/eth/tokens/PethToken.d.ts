import Erc20Token from './Erc20Token';
export default class PethToken extends Erc20Token {
    _tub: any;
    constructor(contract: any, web3Service: any, tub: any);
    join(amount: any, { unit, promise }?: {
        unit?: any;
        promise?: any;
    }): any;
    exit(amount: any, { unit, promise }?: {
        unit?: any;
        promise?: any;
    }): any;
    wrapperRatio(): Promise<any>;
    joinPrice(amount: any, unit?: any): Promise<any>;
    exitPrice(amount: any, unit?: any): Promise<any>;
}
