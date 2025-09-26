import { delay, retry } from '../index';

describe('Async Utilities', () => {
    describe('delay', () => {
        it('should delay execution for the specified time', async () => {
            const start = Date.now();
            await delay(500);
            const end = Date.now();
            expect(end - start).toBeGreaterThanOrEqual(500);
        });
    });

    describe('retry', () => {
        it('should retry the function the specified number of times', async () => {
            let attempt = 0;
            const fn = jest.fn().mockImplementation(() => {
                attempt++;
                if (attempt < 3) {
                    return Promise.reject(new Error('Failed'));
                }
                return Promise.resolve('Success');
            });
            const result = await retry(fn, 5, 100);
            expect(result).toBe('Success');
            expect(fn).toHaveBeenCalledTimes(3);
        }
        );

        it('should throw the last error if all attempts fail', async () => {
            const fn = jest.fn().mockRejectedValue(new Error('Always fails'));
            await expect(retry(fn, 3, 100)).rejects.toThrow('Always fails');
            expect(fn).toHaveBeenCalledTimes(3);
        });
    });
});