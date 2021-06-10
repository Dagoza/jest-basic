import { numbers } from "../js/numbers";

describe('Comparación números', ()=> {
  test('Should be greather', () => {
    expect(numbers(2,2)).toBeGreaterThan(3);
  })

  test('Should be greather or equal', () => {
    expect(numbers(2,2)).toBeGreaterThanOrEqual(3);
  })

  test('Should be less', () => {
    expect(numbers(2,2)).toBeLessThan(5);
  })
  test('Should be less or equal', () => {
    expect(numbers(2,2)).toBeLessThanOrEqual(4);
  })
  test('Shoul be a decimal', () => {
    expect(numbers(2.5,2)).toBeCloseTo(4.5);
  })
})