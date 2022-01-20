export default function makeSigner(web3Service: any): {
    getAddress: () => any;
    estimateGas: (tx: any) => any;
    sendTransaction: (tx: any) => any;
    call: (...args: any[]) => Promise<any>;
    isSigner: () => boolean;
    _isSigner: boolean;
    provider: any;
};
