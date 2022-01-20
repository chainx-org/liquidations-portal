export declare const tag: (strings: any, ...keys: any[]) => (...values: any[]) => string;
export declare const validateAddress: (...args: any[]) => (address: any) => string;
export declare const validateVaultId: (id: any) => string;
export declare const validateVaultTypeResult: (vaultType: any) => "" | "Vault does not exist";
