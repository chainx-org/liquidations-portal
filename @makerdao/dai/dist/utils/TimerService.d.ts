export default class TimerService extends LocalService {
    constructor(name?: string);
    _timers: {};
    createTimer(name: any, duration: any, repeating: any, callback: any): void;
    disposeTimer(name: any): void;
    disposeAllTimers(): void;
    listTimers(): string[];
}
import { LocalService } from "@makerdao/services-core";
