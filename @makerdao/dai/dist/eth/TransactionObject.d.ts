export default class TransactionObject extends TransactionLifeCycle {
    constructor(transaction: any, transactionManager: any, { businessObject, metadata }?: {
        businessObject: any;
        metadata: any;
    });
    _transaction: any;
    _web3Service: any;
    _nonceService: any;
    _timeStampSubmitted: Date;
    metadata: any;
    _confirmedBlockCount: any;
    timeStampSubmitted(): Date;
    timeStamp(): Date;
    fees(): any;
    mine(): Promise<any>;
    _dataPromise: Promise<TransactionObject>;
    confirm(count?: any): Promise<any>;
    _getTransactionData(): Promise<TransactionObject>;
    hash: any;
    _timeStampMined: Date;
    _blockNumberWhenMined: any;
    receipt: any;
    _fees: any;
    _waitForReceipt(retries?: number, currentTry?: number): any;
    _keepWaitingForTx(): Promise<any>;
}
import TransactionLifeCycle from "./TransactionLifeCycle";
