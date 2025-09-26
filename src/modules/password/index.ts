const bcrypt = require('bcrypt');

/**
 * Hashes a plain text password using bcrypt.
 * @param password - The plain text password to be hashed.
 * @returns A promise that resolves to the hashed password.
 */
export async function hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

/**
 * Compares a plain text password with a hashed password to check if they match.
 * @param password - The plain text password to be compared.
 * @param hashedPassword - The hashed password to compare against.
 * @returns A promise that resolves to true if the passwords match, false otherwise.
 */
export async function comparePassword(
    password: string,
    hashedPassword: string
): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
}

/**
 * Generates a random password of specified length.
 * @param length - The length of the password to be generated (default is 12).
 * @returns A promise that resolves to the generated random password.
 */
export async function generateRandomPassword(length: number = 12): Promise<string> {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let password = '';
    const randomValues = new Uint32Array(length);
    
    crypto.getRandomValues(randomValues);
    for (let i = 0; i < length; i++) {
        password += charset[randomValues[i] % charset.length];
    }
    
    return password;
}

/**
 * Validates the strength of a password based on criteria such as length, uppercase, lowercase, number, and special character.
 * @param password - The password to be validated.
 * @returns A promise that resolves to true if the password meets the strength criteria, false otherwise.
 */
export async function validatePasswordStrength(password: string): Promise<boolean> {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
}