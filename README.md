# essential-helper

A collection of essential helper functions for JavaScript and TypeScript projects. This library provides utilities for string manipulation, encoding/decoding operations, asynchronous operations, and password management.

## Installation

```bash
npm install essential-helper
```

## Usage

```typescript
import { toCamelCase, encodeToBase64, delay, hashPassword } from 'essential-helper';

// String manipulation
const result = toCamelCase('hello-world'); // 'helloWorld'

// Encoding
const encoded = encodeToBase64('Hello World'); // 'SGVsbG8gV29ybGQ='

// Async operations
await delay(1000); // Wait for 1 second

// Password hashing
const hashedPassword = await hashPassword('myPassword123!');
```

## API Reference

### String Functions

#### `toCamelCase(str: string): string`

Converts a string to camelCase format.

```typescript
import { toCamelCase } from 'essential-helper';

toCamelCase('hello-world');     // 'helloWorld'
toCamelCase('hello_world');     // 'helloWorld'
toCamelCase('Hello World');     // 'helloWorld'
toCamelCase('HELLO-WORLD');     // 'helloWorld'
```

#### `toKebabCase(str: string): string`

Converts a string to kebab-case format.

```typescript
import { toKebabCase } from 'essential-helper';

toKebabCase('helloWorld');      // 'hello-world'
toKebabCase('hello_world');     // 'hello-world'
toKebabCase('Hello World');     // 'hello-world'
toKebabCase('HelloWorld');      // 'hello-world'
```

#### `toSnakeCase(str: string): string`

Converts a string to snake_case format.

```typescript
import { toSnakeCase } from 'essential-helper';

toSnakeCase('helloWorld');      // 'hello_world'
toSnakeCase('hello-world');     // 'hello_world'
toSnakeCase('Hello World');     // 'hello_world'
toSnakeCase('HelloWorld');      // 'hello_world'
```

#### `toPascalCase(str: string): string`

Converts a string to PascalCase format.

```typescript
import { toPascalCase } from 'essential-helper';

toPascalCase('hello-world');    // 'HelloWorld'
toPascalCase('hello_world');    // 'HelloWorld'
toPascalCase('hello world');    // 'HelloWorld'
toPascalCase('helloWorld');     // 'HelloWorld'
```

#### `capitalizeWords(str: string): string`

Capitalizes the first letter of each word in a string.

```typescript
import { capitalizeWords } from 'essential-helper';

capitalizeWords('hello world');     // 'Hello World'
capitalizeWords('hello-world');     // 'Hello World'
capitalizeWords('hello_world');     // 'Hello World'
```

#### `reverseString(str: string): string`

Reverses the characters in a string.

```typescript
import { reverseString } from 'essential-helper';

reverseString('hello');         // 'olleh'
reverseString('hello-world');   // 'dlrow olleh'
reverseString('hello_world');   // 'dlrow olleh'
```

### Encoding Functions

#### `encodeToBase64(str: string): string`

Encodes a string to Base64 format.

```typescript
import { encodeToBase64 } from 'essential-helper';

encodeToBase64('Hello World');  // 'SGVsbG8gV29ybGQ='
encodeToBase64('test@example.com'); // 'dGVzdEBleGFtcGxlLmNvbQ=='
```

#### `decodeFromBase64(str: string): string`

Decodes a Base64-encoded string.

```typescript
import { decodeFromBase64 } from 'essential-helper';

decodeFromBase64('SGVsbG8gV29ybGQ='); // 'Hello World'
decodeFromBase64('dGVzdEBleGFtcGxlLmNvbQ=='); // 'test@example.com'
```

#### `encodeToUrl(str: string): string`

Encodes a string to URL-encoded format.

```typescript
import { encodeToUrl } from 'essential-helper';

encodeToUrl('hello world');     // 'hello%20world'
encodeToUrl('test@example.com'); // 'test%40example.com'
encodeToUrl('café');            // 'caf%C3%A9'
```

#### `decodeFromUrl(str: string): string`

Decodes a URL-encoded string.

```typescript
import { decodeFromUrl } from 'essential-helper';

decodeFromUrl('hello%20world'); // 'hello world'
decodeFromUrl('test%40example.com'); // 'test@example.com'
decodeFromUrl('caf%C3%A9');     // 'café'
```

### Async Functions

#### `delay(ms: number): Promise<void>`

Delays the execution for a specified number of milliseconds.

```typescript
import { delay } from 'essential-helper';

// Wait for 1 second
await delay(1000);

// Wait for 500 milliseconds
await delay(500);
```

#### `retry<T>(fn: () => Promise<T>, attempts: number, delayMs?: number): Promise<T>`

Retries an asynchronous function a specified number of times with an optional delay between attempts.

```typescript
import { retry } from 'essential-helper';

// Retry a function up to 3 times with 1 second delay
const result = await retry(async () => {
    const response = await fetch('/api/data');
    if (!response.ok) throw new Error('Request failed');
    return response.json();
}, 3, 1000);

// Retry without delay
const result2 = await retry(someAsyncFunction, 5, 0);
```

### Password Functions

#### `hashPassword(password: string): Promise<string>`

Hashes a plain text password using bcrypt.

```typescript
import { hashPassword } from 'essential-helper';

const hashedPassword = await hashPassword('mySecurePassword123!');
console.log(hashedPassword); // $2b$10$...
```

#### `comparePassword(password: string, hashedPassword: string): Promise<boolean>`

Compares a plain text password with a hashed password to check if they match.

```typescript
import { comparePassword } from 'essential-helper';

const isValid = await comparePassword('mySecurePassword123!', hashedPassword);
console.log(isValid); // true or false
```

#### `generateRandomPassword(length?: number): Promise<string>`

Generates a random password of specified length (default is 12).

```typescript
import { generateRandomPassword } from 'essential-helper';

const password = await generateRandomPassword(); // 12 characters
const longPassword = await generateRandomPassword(20); // 20 characters
```

#### `validatePasswordStrength(password: string): Promise<boolean>`

Validates the strength of a password based on criteria such as length, uppercase, lowercase, number, and special character.

```typescript
import { validatePasswordStrength } from 'essential-helper';

const isStrong = await validatePasswordStrength('MyStr0ng!Pass');
console.log(isStrong); // true

const isWeak = await validatePasswordStrength('password');
console.log(isWeak); // false
```

## Examples

### String Case Conversion

```typescript
import { toCamelCase, toKebabCase, toSnakeCase, toPascalCase } from 'essential-helper';

const originalString = 'user-profile-settings';

const camelCase = toCamelCase(originalString);     // 'userProfileSettings'
const kebabCase = toKebabCase(camelCase);          // 'user-profile-settings'
const snakeCase = toSnakeCase(originalString);     // 'user_profile_settings'
const pascalCase = toPascalCase(originalString);   // 'UserProfileSettings'
```

### Data Encoding Pipeline

```typescript
import { encodeToBase64, encodeToUrl, decodeFromBase64, decodeFromUrl } from 'essential-helper';

const sensitiveData = 'user:password@domain.com';

// Encode for transmission
const base64Encoded = encodeToBase64(sensitiveData);
const urlSafe = encodeToUrl(base64Encoded);

// Decode received data
const base64Data = decodeFromUrl(urlSafe);
const originalData = decodeFromBase64(base64Data);

console.log(originalData === sensitiveData); // true
```

### Async Operations with Retry Logic

```typescript
import { retry, delay } from 'essential-helper';

async function fetchWithRetry() {
    return retry(async () => {
        const response = await fetch('/api/unreliable-endpoint');
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        return response.json();
    }, 3, 1000); // 3 attempts with 1 second delay
}

async function processData() {
    console.log('Starting process...');
    await delay(1000); // Wait 1 second
    console.log('Process completed!');
}
```

### Password Management

```typescript
import { hashPassword, comparePassword, generateRandomPassword, validatePasswordStrength } from 'essential-helper';

async function userRegistration(plainTextPassword: string) {
    // Validate password strength
    const isStrong = await validatePasswordStrength(plainTextPassword);
    if (!isStrong) {
        throw new Error('Password does not meet strength requirements');
    }
    
    // Hash the password for storage
    const hashedPassword = await hashPassword(plainTextPassword);
    
    // Store hashedPassword in database
    return { hashedPassword };
}

async function userLogin(plainTextPassword: string, storedHashedPassword: string) {
    const isValid = await comparePassword(plainTextPassword, storedHashedPassword);
    return isValid;
}

async function generateSecurePassword() {
    const password = await generateRandomPassword(16);
    const isStrong = await validatePasswordStrength(password);
    console.log(`Generated password: ${password}, Is strong: ${isStrong}`);
}
```

## TypeScript Support

This package includes TypeScript declarations out of the box. No additional `@types` packages are required.

```typescript
import type { } from 'essential-helper'; // Types are included

// All functions have full type safety
const result: string = toCamelCase('hello-world');
const hashedPassword: Promise<string> = hashPassword('myPassword');
```

## Requirements

- Node.js 14 or higher
- TypeScript 4.0 or higher (if using TypeScript)

## Development

### Setup

```bash
git clone https://github.com/DhakalYukesh/essential-helper.git
cd essential-helper
npm install
```

### Scripts

```bash
npm run build       # Build the project
npm run test        # Run tests
npm run test:watch  # Run tests in watch mode
npm run test:coverage # Run tests with coverage
npm run lint        # Lint the code
npm run format      # Format the code
```

### Testing

The project uses Jest for testing. All functions are thoroughly tested with comprehensive test coverage.

```bash
npm test
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests for your changes
5. Ensure all tests pass (`npm test`)
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

## License

MIT © [Yukesh Dhakal](https://github.com/DhakalYukesh)

## Repository

- [GitHub](https://github.com/DhakalYukesh/essential-helper)
- [Issues](https://github.com/DhakalYukesh/essential-helper/issues)

## Changelog

### 1.2.0 (Current)
- **NEW**: Async utilities (`delay`, `retry`)
- **NEW**: Password management functions (`hashPassword`, `comparePassword`, `generateRandomPassword`, `validatePasswordStrength`)
- String manipulation functions (camelCase, kebab-case, snake_case, PascalCase)
- Text transformation utilities (capitalizeWords, reverseString) 
- Base64 encoding/decoding
- URL encoding/decoding
- Full TypeScript support
- Comprehensive test coverage

### 1.1.1
- String manipulation functions
- Base64 and URL encoding/decoding
- Full TypeScript support
- 100% test coverage