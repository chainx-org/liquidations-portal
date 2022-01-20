export default class AccountsService extends PublicService {
    constructor(name?: string);
    _accounts: {};
    _accountFactories: {
        privateKey: typeof privateKeyAccountFactory;
        provider: typeof providerAccountFactory;
        browser: typeof browserProviderAccountFactory;
    };
    initialize(settings?: {}): Promise<void>;
    _settings: Partial<{}>;
    _engine: any;
    _provider: any;
    connect(): Promise<void>;
    getProvider(): any;
    addAccountType(type: any, factory: any): void;
    addAccount(name: any, options?: {}): Promise<any>;
    listAccounts(): never[];
    useAccount(name: any): void;
    _autoSwitchCheckHandle: NodeJS.Timer;
    _currentAccount: any;
    _autoSwitchCheckAccountChange(addr: any): () => Promise<void>;
    _getAccountWithAddress(addr: any): any;
    useAccountWithAddress(addr: any): void;
    hasAccount(): boolean;
    hasNonProviderAccount(): boolean;
    currentAccount(): Partial<any>;
    currentAddress(): any;
    currentWallet(): any;
}
import { PublicService } from "@makerdao/services-core";
import { privateKeyAccountFactory } from "./accounts/factories";
import { providerAccountFactory } from "./accounts/factories";
import { browserProviderAccountFactory } from "./accounts/factories";
