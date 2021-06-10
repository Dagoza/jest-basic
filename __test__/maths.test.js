import { dividir, multiplicar, restar, sumar } from "../js/math.js";

describe('Math do calculate', ()=> {
  test('Should do sums', () => {
    expect(sumar(1,1)).toBe(2);
  })
  test('Should do multiply', () => {
    expect(multiplicar(2,2)).toBe(4);
  })
  test('Should do subtraction', () => {
    expect(restar(1,1)).toBe(0);
  })
  test('Should do divicion', () => {
    expect(dividir(2,2)).toBe(1);
  })
})
