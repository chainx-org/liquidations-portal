export default class EtherToken {
    _web3: any;
    _gasService: any;
    _transactionManager: any;
    constructor(web3Service: any, gasService: any, transactionManager: any);
    allowance(tokenOwner: any, spender: any): Promise<number>;
    balance(): Promise<any>;
    balanceOf(owner: any): Promise<any>;
    approve(spender: any, value: any): Promise<boolean>;
    approveUnlimited(spender: any): Promise<boolean>;
    transfer(toAddress: any, amount: any, options: any): Promise<any>;
    transferFrom(fromAddress: any, toAddress: any, amount: any, { unit, promise }: {
        unit?: any;
        promise: any;
    }): Promise<any>;
}
