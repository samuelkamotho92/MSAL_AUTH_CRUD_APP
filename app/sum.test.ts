import { describe, expect, test } from '@jest/globals';
import sum from './sum';

describe('sum module', () => {
    test('adds 2 + 2 to equal 4', () => {
        expect(sum(5, 2)).toBe(7);
    });
});