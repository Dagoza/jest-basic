import { getDataFromApi } from "../js/promise";

describe('Testing Async/Await', () => {
  test('Should answer the API', async () => {
    const api = 'https://rickandmortyapi.com/api/character/';
    const getRick = 'https://rickandmortyapi.com/api/character/1'

    const data = await getDataFromApi(api);
    expect(data.results.length).toBeGreaterThanOrEqual(0);

    const data2 = await getDataFromApi(getRick)
    expect(data2.name).toEqual('Rick Sanchez');
  });


  test('should be a error', async () => {
    try {
      await getDataFromApi(`http://httpstat.us/500`);
    } catch(error) {
      expect(error).toEqual(new Error('Request failed with status code 500'));
    }
  });

  test('should be a other error', async () => {
      const getPromise = getDataFromApi(`http://httpstat.us/500`);
      await expect(getPromise).rejects.toEqual(Error('Request failed with status code 500'));
  });
});
