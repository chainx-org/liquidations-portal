export function numberToBytes32(num: any): string;
export function bytes32ToNumber(bytes32: any): number;
export function stringToBytes32(text: any, pad?: boolean): string;
export function stringToBytes(str: any): string;
export function bytesToString(hex: any): string;
export function padRight(string: any, chars: any, sign: any): string;
export function toHex(str: any, { with0x, rightPadding }?: {
    with0x?: boolean;
    rightPadding?: number;
}): string;
export function fromWei(value: any): any;
export function fromRay(value: any): any;
export function fromRad(value: any): any;
