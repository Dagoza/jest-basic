import { getCharacter } from "../js/snapshot";
import rick from "../rick.json";

describe('Testing Snapshot', () => {
  
  test('Should be same to snapshot', () => {
    expect(getCharacter(rick)).toMatchSnapshot();
  });

  test('Snapshot with fails', () => {
    const user = {
      id: Math.floor(Math.random() * 100),
      name: 'Daniel gz',
      createdAt: new Date()
    }
    expect(user).toMatchSnapshot({
      id: expect.any(Number),
      createdAt: expect.any(Date),
    });
  });
});