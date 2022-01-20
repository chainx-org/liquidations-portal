import Maker from './Maker';
import { stringToBytes32, bytes32ToNumber, numberToBytes32, stringToBytes, bytesToString, padRight, toHex } from './utils/conversion';
import { getQueryResponse } from './QueryApi';
export * from './eth/Currency';
export default Maker;
export declare const QueryApi: {
    getQueryResponse: typeof getQueryResponse;
};
export declare const utils: {
    numberToBytes32: typeof numberToBytes32;
    stringToBytes32: typeof stringToBytes32;
    bytes32ToNumber: typeof bytes32ToNumber;
    stringToBytes: typeof stringToBytes;
    bytesToString: typeof bytesToString;
    padRight: typeof padRight;
    toHex: typeof toHex;
};
