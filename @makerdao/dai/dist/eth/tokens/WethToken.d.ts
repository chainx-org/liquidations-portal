import Erc20Token from './Erc20Token';
export default class WethToken extends Erc20Token {
    constructor(contract: any, web3Service: any, decimals: any);
    name(): any;
    deposit(amount: any, { unit, ...options }?: {
        unit?: any;
    }): any;
    withdraw(amount: any, { unit, ...options }?: {
        unit?: any;
    }): any;
}
