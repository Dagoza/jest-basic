import { arrayColors, arrayFruits } from "../js/arrays";

describe('Arrays contains', () => {
  test('should contain a banana', () => {
    expect(arrayFruits()).toContain('banana');
  });

  test('should not contain a platano', () => {
    expect(arrayFruits()).not.toContain('platano');
  });
})

describe('Arrays length', () => {
  test('should have 5 elements', () => {
    expect(arrayColors()).toHaveLength(5);
  });
});
