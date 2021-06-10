import { getDataFromApi } from "../js/promise";

describe('Promise testing', () => {
  test('should calling API', (done) => {
    const url = 'https://rickandmortyapi.com/api/character/';
      getDataFromApi(url).then(
        (data) => {
          expect(data.results.length).toBeGreaterThan(0);
          done();
        }
      )
  });

  test('Should Reject Hola', () => {
    return expect(Promise.reject(new Error('Error'))).rejects.toThrow('Error')
  });

  test('Should resolve Hola', () => {
    return expect(Promise.resolve('Hola')).resolves.toBe('Hola')
  });

});
