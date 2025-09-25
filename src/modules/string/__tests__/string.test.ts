import { capitalizeWords, reverseString, toCamelCase, toKebabCase, toPascalCase, toSnakeCase } from "..";

describe('String Utilities', () => {
    describe('toCamelCase', () => {
        it('should convert a string to camelCase', () => {
            expect(toCamelCase('hello world')).toBe('helloWorld');
        });

        it('should convert kebab-case string to camelCase', () => {
            expect(toCamelCase('hello-world')).toBe('helloWorld');
        });

        it('should convert snake_case string to camelCase', () => {
            expect(toCamelCase('hello_world')).toBe('helloWorld');
        });

        it('should convert PascalCase string to camelCase', () => {
            expect(toCamelCase('HelloWorld')).toBe('helloWorld');
        });

        it('should handle empty string', () => {
            expect(toCamelCase('')).toBe('');
        });
    });

    describe('toKebabCase', () => {
        it('should convert a string to kebab-case', () => {
            expect(toKebabCase('hello world')).toBe('hello-world');
        });

        it('should convert camelCase string to kebab-case', () => {
            expect(toKebabCase('helloWorld')).toBe('hello-world');
        });

        it('should convert snake_case string to kebab-case', () => {
            expect(toKebabCase('hello_world')).toBe('hello-world');
        });

        it('should convert PascalCase string to kebab-case', () => {
            expect(toKebabCase('HelloWorld')).toBe('hello-world');
        });

        it('should handle empty string', () => {
            expect(toKebabCase('')).toBe('');
        });
    });

    describe('toSnakeCase', () => {
        it('should convert a string to snake_case', () => {
            expect(toSnakeCase('hello world')).toBe('hello_world');
        });

        it('should convert kebab-case string to snake_case', () => {
            expect(toSnakeCase('hello-world')).toBe('hello_world');
        });

        it('should convert camelCase string to snake_case', () => {
            expect(toSnakeCase('helloWorld')).toBe('hello_world');
        });

        it('should convert PascalCase string to snake_case', () => {
            expect(toSnakeCase('HelloWorld')).toBe('hello_world');
        });

        it('should handle empty string', () => {
            expect(toSnakeCase('')).toBe('');
        });
    });

    describe('toPascalCase', () => {
        it('should convert a string to PascalCase', () => {
            expect(toPascalCase('hello world')).toBe('HelloWorld');
        });

        it('should convert kebab-case string to PascalCase', () => {
            expect(toPascalCase('hello-world')).toBe('HelloWorld');
        });

        it('should convert snake_case string to PascalCase', () => {
            expect(toPascalCase('hello_world')).toBe('HelloWorld');
        });

        it('should convert camelCase string to PascalCase', () => {
            expect(toPascalCase('helloWorld')).toBe('HelloWorld');
        });

        it('should handle empty string', () => {
            expect(toPascalCase('')).toBe('');
        });
    });

    describe('capitalizeWords', () => {
        it('should capitalize the first letter of each word in a string', () => {
            expect(capitalizeWords('hello world')).toBe('Hello World');
        });

        it('should handle multiple spaces between words', () => {
            expect(capitalizeWords('hello   world')).toBe('Hello   World');
        });
        
        it('should handle empty string', () => {
            expect(capitalizeWords('')).toBe('');
        });
    });

    describe('reverseString', () => {
        it('should reverse the characters in a string', () => {
            expect(reverseString('hello')).toBe('olleh');
        });

        it('should handle empty string', () => {
            expect(reverseString('')).toBe('');
        });
    });
});