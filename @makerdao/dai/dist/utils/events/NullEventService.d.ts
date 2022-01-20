export default class NullEventService extends LocalService {
    constructor(name?: string);
    on(): void;
    emit(): void;
    ping(): void;
    removeListener(): void;
    registerPollEvents(): void;
    buildEmitter(): {
        emit: () => void;
        on: () => void;
        removeListener: () => void;
        registerPollEvents: () => void;
        ping: () => void;
        dispose: () => void;
    };
}
import { LocalService } from "@makerdao/services-core";
