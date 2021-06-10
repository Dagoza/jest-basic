
describe('Strings', ()=> {

  const text = 'Un texto xxxxx'
  test('Should contain text', () => {
    expect(text).toMatch(/texto/);
  })

})
