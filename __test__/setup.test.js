afterEach(() => {
  console.log('Después de cada prueba')
});

afterAll(() => {
  console.log('Después de todo')
});

beforeEach(() => {
  console.log('Antes de cada')
});

beforeAll(() => {
  console.log('Antes de todo')
});

describe('all prepare', () => {
  test('should truthy', () => {
    expect(true).toBeTruthy();
  });
});