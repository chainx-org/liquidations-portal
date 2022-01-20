export default class EventService extends PrivateService {
    constructor(name?: string);
    _block: any;
    emitters: {};
    ping(block: any): void;
    on(event: any, listener: any, emitter?: any): void;
    emit(event: any, payload: any, block: any, emitter?: any): void;
    removeListener(event: any, listener: any, emitter?: any): void;
    registerPollEvents(eventPayloadMap: any, emitter?: any): any;
    buildEmitter({ defaultEmitter }?: {
        defaultEmitter?: boolean;
    }): EventEmitter;
    _disposeEmitter(id: any): void;
    _defaultEmitter(): any;
    _logError(name: any, msg: any): void;
}
import { PrivateService } from "@makerdao/services-core";
import EventEmitter from "./EventEmitter";
