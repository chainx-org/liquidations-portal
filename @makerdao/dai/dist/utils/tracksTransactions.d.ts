export function tracksTransactionsWithOptions({ numArguments }: {
    numArguments: any;
}): (target: any, name: any, descriptor: any) => any;
export default tracksTransactions;
declare function tracksTransactions(target: any, name: any, descriptor: any): any;
