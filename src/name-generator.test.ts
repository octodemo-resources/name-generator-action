import { describe, expect, test } from 'vitest';
import { generateName } from './name-generator';

describe('name-generator', () => {

  describe('defaults', () => {

    test('should generate a name', () => {
      const name = generateName();

      expect(name).toBeDefined();
      console.log(name);
    });
  });

  describe('maxLength', () => {

    const iterations = 100;

    [20, 30, 40, 50, 100].forEach((maxLength) => {
      test(`${maxLength}`, () => {
        for (let i = 0; i < iterations; i++) {
          const name = generateName(maxLength);
          expect(name).toBeDefined();
          expect(name.length).toBeLessThanOrEqual(maxLength);
          console.log(name);
        }
      })
    });

    test('should throw an error if unable to generate a name within the length limit', () => {
      try {
        generateName(5);
        expect.fail('Expected an error to be thrown.');
      } catch (err) {
        expect(err).toBeDefined();
        expect(err.message).toBe('Unable to generate a name within the length limit.');
      }
    });
  });
});