export function privateKeyAccountFactory({ key }: {
    key: any;
}): {
    subprovider: any;
    address: any;
};
export function providerAccountFactory({ offset, address }: {
    offset: any;
    address: any;
}, provider: any): Promise<{
    subprovider: any;
    address: any;
}>;
export function browserProviderAccountFactory(): Promise<{
    subprovider: any;
    address: any;
}>;
