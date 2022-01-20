declare namespace TransactionType {
    export const oasis: string;
    export const transaction: string;
}
export namespace transactionTypeTransitions {
    export { transactionLifeCycle as transaction };
}
declare namespace transactionLifeCycle {
    export const initialized: string[];
    export const pending: string[];
    export const mined: string[];
    export const finalized: any[];
    export const error: any[];
}
export { TransactionType as default };
