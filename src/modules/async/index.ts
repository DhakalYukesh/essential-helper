/**
 * Delays the execution for a specified number of milliseconds.
 * @param ms - The number of milliseconds to delay.
 * @returns A promise that resolves after the specified delay.
 */
export function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Retries an asynchronous function a specified number of times with an optional delay between attempts.
 * @param fn - The asynchronous function to be retried.
 * @param attempts - The number of retry attempts.
 * @param delayMs - The delay in milliseconds between attempts (default is 1000ms).
 * @returns A promise that resolves with the result of the function or rejects with the last error encountered.
 */
export async function retry<T>(
    fn: () => Promise<T>,
    attempts: number,
    delayMs: number = 1000
): Promise<T> {
    let lastError: Error;

    for (let i = 0; i < attempts; i++) {
        try {
            return await fn();
        } catch (error) {
            lastError = error as Error;
            if (i < attempts - 1 && delayMs > 0) {
                await delay(delayMs);
            }
        }
    }

    throw lastError!;
}