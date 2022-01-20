export default class EventEmitter {
    constructor(disposeSelf: any);
    _emitter: EventEmitterObj.EventEmitter2;
    _polls: any[];
    _block: any;
    _sequenceNum: number;
    _disposeSelf: any;
    emit(event: any, payload?: {}, block?: any): void;
    on(event: any, listener: any): void;
    removeListener(event: any, listener: any): void;
    registerPollEvents(eventPayloadMap: any): EventEmitter;
    ping(block: any): void;
    dispose(): void;
    _setBlock(block: any): void;
    _getBlock(): any;
    _startPolls(): void;
    _stopPolls(): void;
}
import EventEmitterObj from "eventemitter2";
