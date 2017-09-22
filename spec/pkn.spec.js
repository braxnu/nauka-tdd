var gra = require('../src/pkn')

describe('Papier Kamien Nozyce', function () {
  it('gra przyjmuje trzy figury', function () {
    expect(gra.runda).toBeDefined();

    expect(function () {
      gra.runda("P", "N")
    }).not.toThrow();
  })
})
