import { isFalse, isNull, isTrue, isUndefined } from "../js/true";

describe('Falsy', ()=> {
  test('should be null', () => {
    expect(isNull()).toBeNull();
  });

  test('should be false', () => {
    expect(isFalse()).toBeFalsy();
  });
  test('should be undefined', () => {
    expect(isUndefined()).toBeUndefined();
  });
})

describe('Thruthy', ()=> {
  test('should be true', () => {
    expect(isTrue()).toBeTruthy();
  });
})