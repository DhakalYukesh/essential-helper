import { decodeFromBase64, decodeFromUrl, encodeToBase64, encodeToUrl } from "..";

describe('Encoding Utilities', () => {
    describe('base64Encode', () => {
        it('should encode a string to Base64', () => {
            expect(encodeToBase64('hello')).toBe('aGVsbG8=');
        });
    });

    describe('base64Decode', () => {
        it('should decode a Base64 string', () => {
            expect(decodeFromBase64('aGVsbG8=')).toBe('hello');
        });
    });

    describe('urlEncode', () => {
        it('should encode a string to URL-encoded format', () => {
            expect(encodeToUrl('hello world')).toBe('hello%20world');
        });
    });

    describe('urlDecode', () => {
        it('should decode a URL-encoded string', () => {
            expect(decodeFromUrl('hello%20world')).toBe('hello world');
        });
    });
});