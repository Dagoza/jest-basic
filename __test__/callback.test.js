import { callbackHell } from "../js/callback";

describe('Testing callback', () => {
  test('should respond the callback', done => {
    function otherCallback(data) {
      expect(data).toBe('Testing callback');
      done();
    }

    callbackHell(otherCallback);
  });
});