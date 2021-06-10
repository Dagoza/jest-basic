describe('Common checkers', () => {
  const user = {
    name: 'Daniel',
    lastName: 'Gómez'
  }

  const user2 = {
    ...user
  }
  const user3 = {
    name: 'Dan',
    lastName: 'Gómez'
  }

  test('Should equals elements ', () => {
    expect(user).toEqual(user2);
  });

  test('Should no equals ', () => {
    expect(user).not.toEqual(user3);
  });
})
