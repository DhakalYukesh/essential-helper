/**
 * Encodes a string to Base64.
 * @param str - The input string to be encoded.
 * @returns The Base64-encoded version of the input string.
 */
export function encodeToBase64(str: string): string {
    return Buffer.from(str, 'utf-8').toString('base64');
}

/**
 * Decodes a Base64-encoded string.
 * @param str - The Base64-encoded string to be decoded.
 * @returns The decoded string.
 */
export function decodeFromBase64(str: string): string {
    return Buffer.from(str, 'base64').toString('utf-8');
}

/**
 * Encodes a string to URL-encoded format.
 * @param str - The input string to be encoded.
 * @returns The URL-encoded version of the input string.
 */
export function encodeToUrl(str: string): string {
    return encodeURIComponent(str);
}

/**
 * Decodes a URL-encoded string.
 * @param str - The URL-encoded string to be decoded.
 * @returns The decoded string.
 */
export function decodeFromUrl(str: string): string {
    return decodeURIComponent(str);
}