export declare function contractAddressesInfo(addresses: any): {
    [x: string]: {
        version: number;
        address: any;
        abi: ({
            constant: boolean;
            inputs: {
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                name: string;
                type: string;
            }[];
            payable: boolean;
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            payable: boolean;
            stateMutability: string;
            type: string;
            constant?: undefined;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
            anonymous?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            constant?: undefined;
            outputs?: undefined;
            payable?: undefined;
            stateMutability?: undefined;
        })[];
        decimals: number;
    }[] | {
        version: number;
        address: any;
        abi: ({
            constant: boolean;
            inputs: {
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
            payable: boolean;
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            constant: boolean;
            inputs: any[];
            name: string;
            outputs: {
                name: string;
                type: string;
            }[];
            payable: boolean;
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            constant?: undefined;
            outputs?: undefined;
            payable?: undefined;
            stateMutability?: undefined;
        })[];
    }[] | {
        version: number;
        address: any;
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            payable: boolean;
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            constant?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            payable?: undefined;
            stateMutability?: undefined;
            constant?: undefined;
            outputs?: undefined;
        } | {
            payable: boolean;
            stateMutability: string;
            type: string;
            inputs?: undefined;
            anonymous?: undefined;
            name?: undefined;
            constant?: undefined;
            outputs?: undefined;
        } | {
            constant: boolean;
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            payable: boolean;
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
    }[] | {
        version: number;
        address: any;
        abi: ({
            constant: boolean;
            inputs: {
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                name: string;
                type: string;
            }[];
            payable: boolean;
            stateMutability: string;
            type: string;
        } | {
            inputs: {
                name: string;
                type: string;
            }[];
            payable: boolean;
            stateMutability: string;
            type: string;
            constant?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            payable: boolean;
            stateMutability: string;
            type: string;
            constant?: undefined;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
    }[] | {
        version: number;
        address: any;
        abi: ({
            constant: boolean;
            inputs: {
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                name: string;
                type: string;
            }[];
            payable: boolean;
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: any[];
            payable: boolean;
            stateMutability: string;
            type: string;
            constant?: undefined;
            name?: undefined;
            outputs?: undefined;
            anonymous?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            constant?: undefined;
            outputs?: undefined;
            payable?: undefined;
            stateMutability?: undefined;
        })[];
    }[] | {
        version: number;
        abi: ({
            constant: boolean;
            inputs: {
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                name: string;
                type: string;
            }[];
            payable: boolean;
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                name: string;
                type: string;
            }[];
            payable: boolean;
            stateMutability: string;
            type: string;
            constant?: undefined;
            name?: undefined;
            outputs?: undefined;
            anonymous?: undefined;
        } | {
            payable: boolean;
            stateMutability: string;
            type: string;
            constant?: undefined;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
            anonymous?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            constant?: undefined;
            outputs?: undefined;
            payable?: undefined;
            stateMutability?: undefined;
        })[];
    }[];
    [x: number]: {
        version: number;
        address: any;
        abi: ({
            constant: boolean;
            inputs: {
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                name: string;
                type: string;
            }[];
            payable: boolean;
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            constant?: undefined;
            outputs?: undefined;
            payable?: undefined;
            stateMutability?: undefined;
        })[];
        decimals: number;
    }[];
};
export declare function contractInfo(network: any): {
    [x: string]: {
        version: number;
        address: any;
        abi: ({
            constant: boolean;
            inputs: {
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                name: string;
                type: string;
            }[];
            payable: boolean;
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            payable: boolean;
            stateMutability: string;
            type: string;
            constant?: undefined;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
            anonymous?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            constant?: undefined;
            outputs?: undefined;
            payable?: undefined;
            stateMutability?: undefined;
        })[];
        decimals: number;
    }[] | {
        version: number;
        address: any;
        abi: ({
            constant: boolean;
            inputs: {
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
            payable: boolean;
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            constant: boolean;
            inputs: any[];
            name: string;
            outputs: {
                name: string;
                type: string;
            }[];
            payable: boolean;
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            constant?: undefined;
            outputs?: undefined;
            payable?: undefined;
            stateMutability?: undefined;
        })[];
    }[] | {
        version: number;
        address: any;
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            payable: boolean;
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            constant?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            payable?: undefined;
            stateMutability?: undefined;
            constant?: undefined;
            outputs?: undefined;
        } | {
            payable: boolean;
            stateMutability: string;
            type: string;
            inputs?: undefined;
            anonymous?: undefined;
            name?: undefined;
            constant?: undefined;
            outputs?: undefined;
        } | {
            constant: boolean;
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            payable: boolean;
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
    }[] | {
        version: number;
        address: any;
        abi: ({
            constant: boolean;
            inputs: {
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                name: string;
                type: string;
            }[];
            payable: boolean;
            stateMutability: string;
            type: string;
        } | {
            inputs: {
                name: string;
                type: string;
            }[];
            payable: boolean;
            stateMutability: string;
            type: string;
            constant?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            payable: boolean;
            stateMutability: string;
            type: string;
            constant?: undefined;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
    }[] | {
        version: number;
        address: any;
        abi: ({
            constant: boolean;
            inputs: {
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                name: string;
                type: string;
            }[];
            payable: boolean;
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: any[];
            payable: boolean;
            stateMutability: string;
            type: string;
            constant?: undefined;
            name?: undefined;
            outputs?: undefined;
            anonymous?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            constant?: undefined;
            outputs?: undefined;
            payable?: undefined;
            stateMutability?: undefined;
        })[];
    }[] | {
        version: number;
        abi: ({
            constant: boolean;
            inputs: {
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                name: string;
                type: string;
            }[];
            payable: boolean;
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                name: string;
                type: string;
            }[];
            payable: boolean;
            stateMutability: string;
            type: string;
            constant?: undefined;
            name?: undefined;
            outputs?: undefined;
            anonymous?: undefined;
        } | {
            payable: boolean;
            stateMutability: string;
            type: string;
            constant?: undefined;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
            anonymous?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            constant?: undefined;
            outputs?: undefined;
            payable?: undefined;
            stateMutability?: undefined;
        })[];
    }[];
    [x: number]: {
        version: number;
        address: any;
        abi: ({
            constant: boolean;
            inputs: {
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                name: string;
                type: string;
            }[];
            payable: boolean;
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            constant?: undefined;
            outputs?: undefined;
            payable?: undefined;
            stateMutability?: undefined;
        })[];
        decimals: number;
    }[];
};
export declare const TESTNET_ID = 999;
declare const _default: ({
    name: string;
    networkId: number;
    contracts: {
        [x: string]: {
            version: number;
            address: any;
            abi: ({
                constant: boolean;
                inputs: {
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            } | {
                payable: boolean;
                stateMutability: string;
                type: string;
                constant?: undefined;
                inputs?: undefined;
                name?: undefined;
                outputs?: undefined;
                anonymous?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                constant?: undefined;
                outputs?: undefined;
                payable?: undefined;
                stateMutability?: undefined;
            })[];
            decimals: number;
        }[] | {
            version: number;
            address: any;
            abi: ({
                constant: boolean;
                inputs: {
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: any[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            } | {
                constant: boolean;
                inputs: any[];
                name: string;
                outputs: {
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                constant?: undefined;
                outputs?: undefined;
                payable?: undefined;
                stateMutability?: undefined;
            })[];
        }[] | {
            version: number;
            address: any;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                payable: boolean;
                stateMutability: string;
                type: string;
                inputs?: undefined;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
        }[] | {
            version: number;
            address: any;
            abi: ({
                constant: boolean;
                inputs: {
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
            } | {
                inputs: {
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                constant?: undefined;
                name?: undefined;
                outputs?: undefined;
            } | {
                payable: boolean;
                stateMutability: string;
                type: string;
                constant?: undefined;
                inputs?: undefined;
                name?: undefined;
                outputs?: undefined;
            })[];
        }[] | {
            version: number;
            address: any;
            abi: ({
                constant: boolean;
                inputs: {
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            } | {
                inputs: any[];
                payable: boolean;
                stateMutability: string;
                type: string;
                constant?: undefined;
                name?: undefined;
                outputs?: undefined;
                anonymous?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                constant?: undefined;
                outputs?: undefined;
                payable?: undefined;
                stateMutability?: undefined;
            })[];
        }[] | {
            version: number;
            abi: ({
                constant: boolean;
                inputs: {
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            } | {
                inputs: {
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                constant?: undefined;
                name?: undefined;
                outputs?: undefined;
                anonymous?: undefined;
            } | {
                payable: boolean;
                stateMutability: string;
                type: string;
                constant?: undefined;
                inputs?: undefined;
                name?: undefined;
                outputs?: undefined;
                anonymous?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                constant?: undefined;
                outputs?: undefined;
                payable?: undefined;
                stateMutability?: undefined;
            })[];
        }[];
        [x: number]: {
            version: number;
            address: any;
            abi: ({
                constant: boolean;
                inputs: {
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                constant?: undefined;
                outputs?: undefined;
                payable?: undefined;
                stateMutability?: undefined;
            })[];
            decimals: number;
        }[];
    };
} | {
    name: string;
    networkId: number;
    contracts?: undefined;
})[];
export default _default;
