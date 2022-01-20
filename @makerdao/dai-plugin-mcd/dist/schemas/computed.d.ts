export declare const collateralTypePrice: {
    generate: (collateralTypeName: any) => {
        dependencies: any[][];
        computed: (ratioDaiUsd: any, priceWithSafetyMargin: any, liquidationRatio: any) => any;
    };
};
export declare const collateralTypesPrices: {
    generate: (types: any) => {
        dependencies: () => any;
        computed: (...prices: any[]) => any[];
    };
};
export declare const defaultCollateralTypesPrices: {
    generate: () => {
        dependencies: () => string[][];
        computed: (...prices: any[]) => any[];
    };
};
export declare const vaultTypeAndAddress: {
    generate: (id: any) => {
        dependencies: any[][];
        computed: (vaultType: any, vaultAddress: any) => any[];
    };
};
export declare const vaultExternalOwner: {
    generate: (id: any) => {
        dependencies: any[][];
        computed: (owner: any) => any;
    };
};
export declare const vaultCollateralAndDebt: {
    generate: (vaultType: any, vaultAddress: any) => {
        dependencies: any[][];
        computed: (encumberedCollateral: any, encumberedDebt: any) => any[];
    };
};
export declare const collateralAmount: {
    generate: (id: any) => {
        dependencies: any[][];
        computed: (vaultType: any, encumberedCollateral: any) => any;
    };
};
export declare const collateralValue: {
    generate: (id: any) => {
        dependencies: any[][];
        computed: (collateralTypePrice: any, collateralAmount: any) => any;
    };
};
export declare const debtValue: {
    generate: (id: any) => {
        dependencies: (string | any[])[][];
        computed: (encumberedDebt: any, debtScalingFactor: any) => any;
    };
};
export declare const collateralizationRatio: {
    generate: (id: any) => {
        dependencies: any[][];
        computed: (collateralValue: any, debtValue: any) => any;
    };
};
export declare const liquidationPrice: {
    generate: (id: any) => {
        dependencies: any[][];
        computed: (collateralAmount: any, debtValue: any, liquidationRatio: any) => any;
    };
};
export declare const daiAvailable: {
    generate: (id: any) => {
        dependencies: any[][];
        computed: (collateralValue: any, debtValue: any, liquidationRatio: any) => any;
    };
};
export declare const minSafeCollateralAmount: {
    generate: (id: any) => {
        dependencies: any[][];
        computed: (debtValue: any, liquidationRatio: any, price: any) => any;
    };
};
export declare const collateralAvailableAmount: {
    generate: (id: any) => {
        dependencies: any[][];
        computed: (collateralAmount: any, minSafeCollateralAmount: any) => any;
    };
};
export declare const collateralAvailableValue: {
    generate: (id: any) => {
        dependencies: any[][];
        computed: (collateralAvailableAmount: any, collateralTypePrice: any) => any;
    };
};
export declare const collateralTypeData: {
    generate: (collateralTypeName: any) => {
        dependencies: any[][];
        computed: (collateralTypePrice: any, annualStabilityFee: any, liquidationPenalty: any, liquidationRatio: any, priceWithSafetyMargin: any, debtFloor: any, collateralDebtAvailable: any) => {
            symbol: any;
            collateralTypePrice: any;
            annualStabilityFee: any;
            liquidationRatio: any;
            liquidationPenalty: any;
            priceWithSafetyMargin: any;
            debtFloor: any;
            collateralDebtAvailable: any;
            calculateCollateralizationRatio(collateralAmount: any, debtValue: any): any;
            calculateliquidationPrice(collateralAmount: any, debtValue: any): any;
            calculateMaxDai(collateralAmount: any): any;
        };
    };
};
export declare const collateralTypesData: {
    generate: (types: any) => {
        dependencies: () => any;
        computed: (...collateralTypes: any[]) => any[];
    };
};
export declare const vault: {
    generate: (id: any) => {
        dependencies: any[][];
        computed: (vaultType: any, vaultAddress: any, ownerAddress: any, externalOwnerAddress: any, encumberedCollateral: any, encumberedDebt: any, collateralTypePrice: any, debtValue: any, collateralizationRatio: any, collateralAmount: any, collateralValue: any, liquidationPrice: any, daiAvailable: any, collateralAvailableAmount: any, collateralAvailableValue: any, unlockedCollateral: any, liquidationRatio: any, liquidationPenalty: any, annualStabilityFee: any, debtFloor: any, minSafeCollateralAmount: any, collateralDebtAvailable: any) => {
            id: number;
            vaultType: any;
            vaultAddress: any;
            ownerAddress: any;
            externalOwnerAddress: any;
            encumberedCollateral: any;
            encumberedDebt: any;
            collateralTypePrice: any;
            debtValue: any;
            collateralizationRatio: any;
            collateralAmount: any;
            collateralValue: any;
            liquidationPrice: any;
            daiAvailable: any;
            collateralAvailableAmount: any;
            collateralAvailableValue: any;
            unlockedCollateral: any;
            liquidationRatio: any;
            liquidationPenalty: any;
            annualStabilityFee: any;
            debtFloor: any;
            minSafeCollateralAmount: any;
            collateralDebtAvailable: any;
            calculateLiquidationPrice({ collateralAmount, debtValue, liquidationRatio }?: {
                collateralAmount?: any;
                debtValue?: any;
                liquidationRatio?: any;
            }): any;
            calculateCollateralizationRatio({ collateralValue, debtValue }?: {
                collateralValue?: any;
                debtValue?: any;
            }): any;
        };
    };
    validate: {
        args: (id: any) => string;
    };
};
export declare const daiLockedInDsr: {
    generate: (address: any) => {
        dependencies: (string | any[])[][];
        computed: (savingsDai: any, savingsRateAccumulator: any) => any;
    };
    validate: {
        args: (address: any) => string;
    };
};
export declare const totalDaiLockedInDsr: {
    generate: () => {
        dependencies: string[][];
        computed: (totalSavingsDai: any, savingsRateAccumulator: any) => any;
    };
};
export declare const balance: {
    generate: (symbol: any, address: any) => {
        dependencies: () => any[][];
        computed: (v: any) => any;
    };
};
export declare const allowance: {
    generate: (symbol: any, address: any) => {
        dependencies: any[][];
        computed: (v: any) => any;
    };
};
export declare const savings: {
    generate: (address: any) => {
        dependencies: any[][];
        computed: (annualDaiSavingsRate: any, daiSavingsRate: any, dateEarningsLastAccrued: any, daiLockedInDsr: any, proxyAddress: any, savingsRateAccumulator: any, savingsDai: any) => {
            annualDaiSavingsRate: any;
            daiSavingsRate: any;
            dateEarningsLastAccrued: any;
            daiLockedInDsr: any;
            proxyAddress: any;
            savingsRateAccumulator: any;
            savingsDai: any;
        };
    };
    validate: {
        args: (address: any) => string;
    };
};
export declare const userVaultsList: {
    generate: (address: any, descending: any) => {
        dependencies: ({ get }: {
            get: any;
        }) => any[][];
        computed: (ids: any, addresses: any, types: any) => any;
    };
    validate: {
        args: (address: any) => string;
    };
};
export declare const userVaultsData: {
    generate: (ids: any) => {
        dependencies: any;
        computed: (...vaults: any[]) => any[];
    };
};
export declare const collateralDebt: {
    generate: (collateralTypeName: any) => {
        dependencies: any[][];
        computed: (totalEncumberedDebt: any, debtScalingFactor: any) => any;
    };
};
export declare const collateralDebtCeilings: {
    generate: (cdpTypes: any) => {
        dependencies: () => any;
        computed: (...ceilings: any[]) => any;
    };
};
export declare const collateralDebtAvailable: {
    generate: (collateralTypeName: any) => {
        dependencies: any[][];
        computed: (collateralDebt: any, debtCeiling: any) => any;
    };
};
export declare const collateralDebtAvailableList: {
    generate: (cdpTypes: any) => {
        dependencies: () => any;
        computed: (...debtsAvailable: any[]) => any;
    };
};
export declare const collateralTypeCollateralization: {
    generate: (collateralTypeName: any, percentage?: boolean) => {
        dependencies: any[][];
        computed: (debt: any, price: any, amount: any) => any;
    };
};
export declare const systemCollateralization: {
    generate: (vaultTypes: any) => {
        dependencies: any;
        computed: (...collateralizationValues: any[]) => any;
    };
};
export declare const proxyOwner: {
    generate: (address: any) => {
        dependencies: ({ get }: {
            get: any;
        }) => (() => Promise<any>)[][];
        computed: (owner: any) => any;
    };
    validate: {
        args: (address: any) => string;
    };
};
declare const _default: {
    collateralTypePrice: {
        generate: (collateralTypeName: any) => {
            dependencies: any[][];
            computed: (ratioDaiUsd: any, priceWithSafetyMargin: any, liquidationRatio: any) => any;
        };
    };
    collateralTypesPrices: {
        generate: (types: any) => {
            dependencies: () => any;
            computed: (...prices: any[]) => any[];
        };
    };
    defaultCollateralTypesPrices: {
        generate: () => {
            dependencies: () => string[][];
            computed: (...prices: any[]) => any[];
        };
    };
    vaultTypeAndAddress: {
        generate: (id: any) => {
            dependencies: any[][];
            computed: (vaultType: any, vaultAddress: any) => any[];
        };
    };
    vaultExternalOwner: {
        generate: (id: any) => {
            dependencies: any[][];
            computed: (owner: any) => any;
        };
    };
    vaultCollateralAndDebt: {
        generate: (vaultType: any, vaultAddress: any) => {
            dependencies: any[][];
            computed: (encumberedCollateral: any, encumberedDebt: any) => any[];
        };
    };
    vault: {
        generate: (id: any) => {
            dependencies: any[][];
            computed: (vaultType: any, vaultAddress: any, ownerAddress: any, externalOwnerAddress: any, encumberedCollateral: any, encumberedDebt: any, collateralTypePrice: any, debtValue: any, collateralizationRatio: any, collateralAmount: any, collateralValue: any, liquidationPrice: any, daiAvailable: any, collateralAvailableAmount: any, collateralAvailableValue: any, unlockedCollateral: any, liquidationRatio: any, liquidationPenalty: any, annualStabilityFee: any, debtFloor: any, minSafeCollateralAmount: any, collateralDebtAvailable: any) => {
                id: number;
                vaultType: any;
                vaultAddress: any;
                ownerAddress: any;
                externalOwnerAddress: any;
                encumberedCollateral: any;
                encumberedDebt: any;
                collateralTypePrice: any;
                debtValue: any;
                collateralizationRatio: any;
                collateralAmount: any;
                collateralValue: any;
                liquidationPrice: any;
                daiAvailable: any;
                collateralAvailableAmount: any;
                collateralAvailableValue: any;
                unlockedCollateral: any;
                liquidationRatio: any;
                liquidationPenalty: any;
                annualStabilityFee: any;
                debtFloor: any;
                minSafeCollateralAmount: any;
                collateralDebtAvailable: any;
                calculateLiquidationPrice({ collateralAmount, debtValue, liquidationRatio }?: {
                    collateralAmount?: any;
                    debtValue?: any;
                    liquidationRatio?: any;
                }): any;
                calculateCollateralizationRatio({ collateralValue, debtValue }?: {
                    collateralValue?: any;
                    debtValue?: any;
                }): any;
            };
        };
        validate: {
            args: (id: any) => string;
        };
    };
    collateralAmount: {
        generate: (id: any) => {
            dependencies: any[][];
            computed: (vaultType: any, encumberedCollateral: any) => any;
        };
    };
    collateralValue: {
        generate: (id: any) => {
            dependencies: any[][];
            computed: (collateralTypePrice: any, collateralAmount: any) => any;
        };
    };
    debtValue: {
        generate: (id: any) => {
            dependencies: (string | any[])[][];
            computed: (encumberedDebt: any, debtScalingFactor: any) => any;
        };
    };
    collateralizationRatio: {
        generate: (id: any) => {
            dependencies: any[][];
            computed: (collateralValue: any, debtValue: any) => any;
        };
    };
    liquidationPrice: {
        generate: (id: any) => {
            dependencies: any[][];
            computed: (collateralAmount: any, debtValue: any, liquidationRatio: any) => any;
        };
    };
    daiAvailable: {
        generate: (id: any) => {
            dependencies: any[][];
            computed: (collateralValue: any, debtValue: any, liquidationRatio: any) => any;
        };
    };
    minSafeCollateralAmount: {
        generate: (id: any) => {
            dependencies: any[][];
            computed: (debtValue: any, liquidationRatio: any, price: any) => any;
        };
    };
    collateralAvailableAmount: {
        generate: (id: any) => {
            dependencies: any[][];
            computed: (collateralAmount: any, minSafeCollateralAmount: any) => any;
        };
    };
    collateralAvailableValue: {
        generate: (id: any) => {
            dependencies: any[][];
            computed: (collateralAvailableAmount: any, collateralTypePrice: any) => any;
        };
    };
    daiLockedInDsr: {
        generate: (address: any) => {
            dependencies: (string | any[])[][];
            computed: (savingsDai: any, savingsRateAccumulator: any) => any;
        };
        validate: {
            args: (address: any) => string;
        };
    };
    totalDaiLockedInDsr: {
        generate: () => {
            dependencies: string[][];
            computed: (totalSavingsDai: any, savingsRateAccumulator: any) => any;
        };
    };
    balance: {
        generate: (symbol: any, address: any) => {
            dependencies: () => any[][];
            computed: (v: any) => any;
        };
    };
    allowance: {
        generate: (symbol: any, address: any) => {
            dependencies: any[][];
            computed: (v: any) => any;
        };
    };
    savings: {
        generate: (address: any) => {
            dependencies: any[][];
            computed: (annualDaiSavingsRate: any, daiSavingsRate: any, dateEarningsLastAccrued: any, daiLockedInDsr: any, proxyAddress: any, savingsRateAccumulator: any, savingsDai: any) => {
                annualDaiSavingsRate: any;
                daiSavingsRate: any;
                dateEarningsLastAccrued: any;
                daiLockedInDsr: any;
                proxyAddress: any;
                savingsRateAccumulator: any;
                savingsDai: any;
            };
        };
        validate: {
            args: (address: any) => string;
        };
    };
    userVaultsList: {
        generate: (address: any, descending: any) => {
            dependencies: ({ get }: {
                get: any;
            }) => any[][];
            computed: (ids: any, addresses: any, types: any) => any;
        };
        validate: {
            args: (address: any) => string;
        };
    };
    userVaultsData: {
        generate: (ids: any) => {
            dependencies: any;
            computed: (...vaults: any[]) => any[];
        };
    };
    collateralDebt: {
        generate: (collateralTypeName: any) => {
            dependencies: any[][];
            computed: (totalEncumberedDebt: any, debtScalingFactor: any) => any;
        };
    };
    collateralTypeCollateralization: {
        generate: (collateralTypeName: any, percentage?: boolean) => {
            dependencies: any[][];
            computed: (debt: any, price: any, amount: any) => any;
        };
    };
    systemCollateralization: {
        generate: (vaultTypes: any) => {
            dependencies: any;
            computed: (...collateralizationValues: any[]) => any;
        };
    };
    proxyOwner: {
        generate: (address: any) => {
            dependencies: ({ get }: {
                get: any;
            }) => (() => Promise<any>)[][];
            computed: (owner: any) => any;
        };
        validate: {
            args: (address: any) => string;
        };
    };
    collateralTypeData: {
        generate: (collateralTypeName: any) => {
            dependencies: any[][];
            computed: (collateralTypePrice: any, annualStabilityFee: any, liquidationPenalty: any, liquidationRatio: any, priceWithSafetyMargin: any, debtFloor: any, collateralDebtAvailable: any) => {
                symbol: any;
                collateralTypePrice: any;
                annualStabilityFee: any;
                liquidationRatio: any;
                liquidationPenalty: any;
                priceWithSafetyMargin: any;
                debtFloor: any;
                collateralDebtAvailable: any;
                calculateCollateralizationRatio(collateralAmount: any, debtValue: any): any;
                calculateliquidationPrice(collateralAmount: any, debtValue: any): any;
                calculateMaxDai(collateralAmount: any): any;
            };
        };
    };
    collateralTypesData: {
        generate: (types: any) => {
            dependencies: () => any;
            computed: (...collateralTypes: any[]) => any[];
        };
    };
    collateralDebtCeilings: {
        generate: (cdpTypes: any) => {
            dependencies: () => any;
            computed: (...ceilings: any[]) => any;
        };
    };
    collateralDebtAvailable: {
        generate: (collateralTypeName: any) => {
            dependencies: any[][];
            computed: (collateralDebt: any, debtCeiling: any) => any;
        };
    };
    collateralDebtAvailableList: {
        generate: (cdpTypes: any) => {
            dependencies: () => any;
            computed: (...debtsAvailable: any[]) => any;
        };
    };
};
export default _default;
