export default class CacheService extends LocalService {
    constructor(name?: string);
    initialize(settings?: {}): void;
    _storage: any;
    isEnabled(): boolean;
    has(key: any): boolean;
    fetch(key: any): any;
    store(key: any, value: any): void;
}
import { LocalService } from "@makerdao/services-core";
