import { test, expect, vi } from 'vitest';
import { promises as fs } from 'fs';
import writeData from './io';

vi.mock('fs');
vi.mock('path', () => {
    return {
        default: {
            join: (...args) => {
                return args[args.length - 1];
            },
        },
    };
});

test('should execute the writeFile method', () => {
    const testData = 'Test Data';
    const testFilename = 'test.txt';

    writeData(testData, testFilename);

    // return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
    // expect(fs.writeFile).toBeCalled();
    expect(fs.writeFile).toBeCalledWith(testFilename, testData);
});

test('should return a promise that resolves to no lue if called correctly', () => {
    const testData = 'Test Data';
    const testFilename = 'test.txt';

    writeData(testData, testFilename);

    return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
    // expect(fs.writeFile).toBeCalled();
    // expect(fs.writeFile).toBeCalledWith(testFilename, testData);
});
