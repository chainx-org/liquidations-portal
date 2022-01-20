export default class Erc20Token {
    _contract: any;
    _web3: any;
    _decimals: any;
    symbol: any;
    _currency: any;
    constructor(contract: any, web3Service: any, decimals: number, symbol: any, currency?: any);
    allowance(tokenOwner: any, spender: any): Promise<any>;
    balance(): Promise<any>;
    balanceOf(owner: any): Promise<any>;
    totalSupply(): Promise<any>;
    address(): any;
    _valueForContract(value: any, unit?: any): any;
    _valueFromContract(value: any): any;
    approve(spender: any, value: any, { unit, ...options }?: {
        unit?: any;
    }): any;
    approveUnlimited(spender: any, options?: {}): any;
    transfer(to: any, value: any, { unit, promise }?: {
        unit?: any;
        promise?: any;
    }): any;
    transferFrom(from: any, to: any, value: any, { unit, promise }?: {
        unit?: any;
        promise?: any;
    }): any;
    _getCurrency(amount: any, unit: any): any;
}
