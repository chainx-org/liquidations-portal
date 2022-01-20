export default l;
declare const l: Web3ServiceList;
declare class Web3ServiceList {
    _list: any[];
    push(service: any): void;
    disconnectAll(): Promise<any[]>;
}
