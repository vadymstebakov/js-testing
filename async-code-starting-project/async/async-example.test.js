import { expect, it } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

it('should generate a token value with callback', done => {
    const testEmail = 'qwe@gmail.com';

    generateToken(testEmail, (err, token) => {
        try {
            expect(token).toBeDefined();
            done();
        } catch (error) {
            done(error);
        }
    });
});

it('should generate a token value with promise', () => {
    const testEmail = 'qwe@gmail.com';

    return expect(generateTokenPromise(testEmail)).resolves.toBeDefined();
});

it('should generate a token value with async/await', async () => {
    const testEmail = 'qwe@gmail.com';

    const token = await generateTokenPromise(testEmail);

    expect(token).toBeDefined();
});
