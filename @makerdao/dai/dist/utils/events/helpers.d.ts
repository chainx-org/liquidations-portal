export function createPayloadFetcher(payloadGetterMap: any): () => Promise<{}>;
export function createMemoizedPoll({ type, getState, emit, curr, live }: {
    type: any;
    getState: any;
    emit: any;
    curr?: {};
    live?: boolean;
}): {
    ping(): Promise<void>;
    heat(): Promise<void>;
    cool(): void;
    type(): any;
    live(): boolean;
};
