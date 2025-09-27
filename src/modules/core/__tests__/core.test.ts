import { createResponse, logger, paginate, requiredEnv, singleInstance, properDate } from '../index';

describe('Core Utilities', () => {
    describe('createResponse', () => {
        it('should create a response object with default values', () => {
            const data = { key: 'value' };
            const response = createResponse(data);
            expect(response).toEqual({
                status: 200,
                message: 'OK',
                data,
            });
        });

        it('should create a response object with custom values', () => {
            const data = { key: 'value' };
            const response = createResponse(data, 'Custom Message', 404);
            expect(response).toEqual({
                status: 404,
                message: 'Custom Message',
                data,
            });
        });
    });

    describe('requiredEnv', () => {
        const ORIGINAL_ENV = process.env;
        beforeEach(() => {
            jest.resetModules();
            process.env = { ...ORIGINAL_ENV };
        });

        afterEach(() => {
            process.env = ORIGINAL_ENV;
        });

        it('should return the value of the environment variable if set', () => {
            process.env.TEST_VAR = 'test_value';
            const result = requiredEnv('TEST_VAR');
            expect(result).toBe('test_value');
        });

        it('should throw an error if the environment variable is not set', () => {
            expect(() => requiredEnv('UNSET_VAR')).toThrow(
                'Environment variable UNSET_VAR is required but not set.'
            );
        });
    });

    describe('paginate', () => {
        const items = Array.from({ length: 50 }, (_, i) => i + 1);

        it('should return the correct paginated data for the first page', () => {
            const result = paginate(items, 1, 10);
            expect(result).toEqual({
                data: items.slice(0, 10),
                meta: {
                    total: 50,
                    page: 1,
                    perPage: 10,
                    totalPages: 5,
                },
            });
        });

        it('should return the correct paginated data for the second page', () => {
            const result = paginate(items, 2, 10);
            expect(result).toEqual({
                data: items.slice(10, 20),
                meta: {
                    total: 50,
                    page: 2,
                    perPage: 10,
                    totalPages: 5,
                },
            });
        });

        it('should return an empty data array for a non-existent page', () => {
            const result = paginate(items, 6, 10);
            expect(result).toEqual({
                data: [],
                meta: {
                    total: 50,
                    page: 6,
                    perPage: 10,
                    totalPages: 5,
                },
            });
        });
    });   

    describe('logger', () => {
        beforeEach(() => {
            jest.spyOn(console, 'log').mockImplementation(() => {});
            jest.spyOn(console, 'warn').mockImplementation(() => {});
            jest.spyOn(console, 'error').mockImplementation(() => {});
        });
        afterEach(() => {
            jest.restoreAllMocks();
        });

        it('should log an info message', () => {
            logger('This is an info message', 'info');
            expect(console.log).toHaveBeenCalled();
        });

        it('should log a warning message', () => {
            logger('This is a warning message', 'warn');
            expect(console.warn).toHaveBeenCalled();
        });

        it('should log an error message', () => {
            logger('This is an error message', 'error');
            expect(console.error).toHaveBeenCalled();
        });
    });

    describe('singleInstance', () => {
        it('should return the same instance on multiple calls', () => {
            const createInstance = jest.fn(() => ({ value: Math.random() }));
            const getInstance = singleInstance(createInstance);
            const instance1 = getInstance();
            const instance2 = getInstance();
            expect(instance1).toBe(instance2);
            expect(createInstance).toHaveBeenCalledTimes(1);
        });
    });

    describe('properDate', () => {
        it('should return a formatted date string for a valid date string', () => {
            const dateStr = '2023-10-01T12:00:00Z';
            const dateObj = new Date(dateStr);
            const result = properDate(dateObj);
            expect(typeof result).toBe('string');
            expect(result).toBe(dateObj.toLocaleDateString('en-US'));
        });
    });
});