export default TransactionLifeCycle;
declare class TransactionLifeCycle {
    constructor(businessObject: any);
    _state: StateMachine;
    _businessObject: any;
    setPending(): void;
    setMined(): void;
    setFinalized(): void;
    setError(errorObject: any): void;
    error: any;
    state(): any;
    isInitialized(): boolean;
    isPending(): boolean;
    isMined(): boolean | null;
    isFinalized(): boolean | null;
    isError(): boolean;
    _returnValue(): any;
    inOrPastState(state: any): boolean;
    _onStateChange(from: any, to: any, handler: any): void;
    onPending(handler: any): void;
    onMined(handler: any): void;
    onFinalized(handler: any): void;
    onConfirmed(handler: any): void;
    onError(handler: any): void;
    on(state: any, handler: any): void;
}
import { StateMachine } from "@makerdao/services-core";
