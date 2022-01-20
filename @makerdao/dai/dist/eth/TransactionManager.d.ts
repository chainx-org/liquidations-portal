export default class TransactionManager extends PublicService {
    constructor(name?: string);
    _newTxListeners: any[];
    _tracker: Tracker;
    sendContractCall(contract: any, method: any, args: any, name: any): Promise<any>;
    sendTransaction(options: any, metadata: any): Promise<any>;
    onNewTransaction(cb: any): void;
    onTransactionUpdate(cb: any): {
        unsub: () => void;
    };
    getTransaction(promise: any, label: any): any;
    confirm(promise: any, count: any): Promise<[any, any, any, any, any, any, any, any, any, any]>;
    isMined(promise: any): any;
    listen(promise: any, handlers: any): void;
    _execute(contract: any, method: any, args: any, options: any): any;
    _createTransactionObject(tx: any, { businessObject, metadata, promise }?: {
        businessObject: any;
        metadata: any;
        promise: any;
    }): Promise<any>;
    _buildTransactionOptions(options: any, contract: any, method: any, args: any): Promise<any>;
    _getGasLimit(options: any, contract: any, method: any, args: any): Promise<any>;
}
import { PublicService } from "@makerdao/services-core";
declare class Tracker {
    static states: string[];
    _listeners: {};
    _globalListeners: any[];
    _transactions: {};
    store(key: any, tx: any, options?: {
        globalTxStateUpdates: boolean;
    }): void;
    listen(key: any, handlers: any): void;
    getAll(key: any): any;
    get(key: any): any;
    clearExpiredTransactions(): void;
    _init(key: any): void;
}
export {};
