import { hashPassword, comparePassword, generateRandomPassword, validatePasswordStrength } from '../index';

describe('Password Utilities', () => {
    describe('hashPassword', () => {
        it('should hash a password', async () => {
            const password = 'mySecurePassword123!';
            const hashedPassword = await hashPassword(password);
            expect(hashedPassword).not.toEqual(password);
        });
    });

    describe('comparePassword', () => {
        it('should compare a password with a hashed password', async () => {
            const password = 'mySecurePassword123!';
            const hashedPassword = await hashPassword(password);
            const isMatch = await comparePassword(password, hashedPassword);
            expect(isMatch).toBe(true);
        });
    });

    describe('generateRandomPassword', () => {
        it('should generate a random password', async () => {
            const password = await generateRandomPassword();
            expect(password).toHaveLength(12);
        });
    });

    describe('validatePasswordStrength', () => {
        it('should validate password strength', async () => {
            const strongPassword = 'My$ecureP@ssw0rd!';
            const weakPassword = 'password';
            expect(await validatePasswordStrength(strongPassword)).toBe(true);
            expect(await validatePasswordStrength(weakPassword)).toBe(false);
        });
    });
});