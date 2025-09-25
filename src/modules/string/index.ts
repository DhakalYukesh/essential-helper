/**
 * Converts a string to camelCase.
 * @param str - The input string to be converted.
 * @returns The camelCase version of the input string.
 */
export function toCamelCase(str: string): string {
    const normalized = str.replace(/[-_]/g, ' ');

    let value = normalized.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
        return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    });
    return value.replace(/\s+/g, '');
}

/**
 * Converts a string to kebab-case.
 * @param str - The input string to be converted.
 * @returns The kebab-case version of the input string.
 */
export function toKebabCase(str: string): string {
    const normalized = str.replace(/[-_]/g, ' ');

    let value = normalized.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    return value.replace(/\s+/g, '-');
}

/**
 * Converts a string to snake_case.
 * @param str - The input string to be converted.
 * @returns The snake_case version of the input string.
 */
export function toSnakeCase(str: string): string {
    const normalized = str.replace(/[-_]/g, ' ');

    let value = normalized.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
    return value.replace(/\s+/g, '_');
}

/**
 * Converts a string to PascalCase.
 * @param str - The input string to be converted.
 * @returns The PascalCase version of the input string.
 */
export function toPascalCase(str: string): string {
    const normalized = str.replace(/[-_]/g, ' ');

    let value = normalized.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter) => {
        return letter.toUpperCase();
    });
    return value.replace(/\s+/g, '');
}

/**
 * Capitalizes the first letter of each word in a string.
 * @param str - The input string to be converted.
 * @returns The string with the first letter of each word capitalized.
 */
export function capitalizeWords(str: string): string {
    const normalized = str.replace(/[-_]/g, ' ');
    return normalized.replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * Reverses the characters in a string.
 * @param str - The input string to be reversed.
 * @returns The reversed string.
 */
export function reverseString(str: string): string {
    const normalized = str.replace(/[-_]/g, ' ');
    return normalized.split('').reverse().join('');
}