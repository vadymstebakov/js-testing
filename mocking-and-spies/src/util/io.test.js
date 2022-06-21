import { test, expect, vi } from 'vitest';
import { promises as fs } from 'fs';
import writeData from './io';

vi.mock('fs');

test('should execute the writeFile method', () => {
    const testData = 'Test Data';
    const testFilename = 'test.txt';

    writeData(testData, testFilename);

    expect(fs.writeFile).toBeCalled();
});
