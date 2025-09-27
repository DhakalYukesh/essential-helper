const pc = require('picocolors');

/**
 * Creates a standardized response object.
 * @param data - The data to include in the response.
 * @param message - A message describing the response.
 * @param status - The HTTP status code (default is 200).
 * @return An object containing the status, message, and data.
 */
export function createResponse<T>(data: T, message: string = 'OK', status: number = 200) {
    return {
        status,
        message,
        data,
    };
}

/**
 * Retrieves the value of an environment variable, throwing an error if it is not set.
 * @param varName - The name of the environment variable.
 * @returns The value of the environment variable.
 * @throws An error if the environment variable is not set.
 */
export function requiredEnv(varName: string): string {
    const value = process.env[varName];
    if (!value) throw new Error(`Environment variable ${varName} is required but not set.`);
    return value;
}

/** Paginates an array of items.
 * @param items - The array of items to paginate.
 * @param page - The current page number (default is 1).
 * @param perPage - The number of items per page (default is 20).
 * @returns An object containing the paginated data and metadata.
 */
export function paginate<T>(items: T[], page: number = 1, perPage: number = 20) {
    const total = items.length;
    const totalPages = Math.ceil(total / perPage);
    const start = (page - 1) * perPage;
    return {
        data: items.slice(start, start + perPage),
        meta: {
            total,
            page,
            perPage,
            totalPages,
        },
    };
}

/** Logs a message with a timestamp and specified log level.
 * @param message - The message to log.
 * @param level - The log level ('info', 'warn', 'error'). Default is 'info'.
 */
export function logger(message: string, level: 'info' | 'warn' | 'error' = 'info') {
    const colors = {
        info: pc.cyan,
        warn: pc.yellow,
        error: pc.red,
    }
    const timestamp = new Date().toISOString();
    const line = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    const method = level === 'error' ? console.error
                : level === 'warn' ? console.warn
                : console.log;
    method(colors[level](line));
}

/** Ensures a function is only executed once and returns the same instance on subsequent calls.
 * @param createInstance - A function that creates the instance.
 * @returns A function that returns the single instance.
 */
export function singleInstance<T>(createInstance: () => T): () => T {
    let instance: T | null = null;
    return () => {
        if (!instance) {
            instance = createInstance();
        }
        return instance;
    };
}

/** Formats a Date object into a readable string based on locale and options.
 * @param date - The Date object to format.
 * @param locale - The locale string (default is 'en-US').
 * @param options - The options for formatting (default is undefined).
 * @returns The formatted date string.
 */
export function  properDate(date: Date, locale: string = 'en-US', options?: Intl.DateTimeFormatOptions): string {
    return date.toLocaleDateString(locale, options);
}