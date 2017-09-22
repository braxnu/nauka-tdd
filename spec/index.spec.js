var signal = require('../src/index')

// grupa testów (test suite)
describe('Sygnalizator', function () {

  // pojedynczy test
  it('ma światło czerwone', function () {
    expect(signal.red).toBeDefined();
  })

  it('ma światło zolte', function () {
    expect(signal.yellow).toBeDefined();
  })

  it('ma światło zielone', function () {
    expect(signal.green).toBeDefined();
  })

  it('zapala czerwone jako pierwsze', function () {
    expect(signal.red).toBe(true);
  })

  it('zapala zolte po czerwonym', function () {
    signal.turn()
    expect(signal.yellow).toBe(true);
  })

  it('zapala zielone po zoltym', function () {
    signal.turn()
    expect(signal.green).toBe(true);
  })

   it('zapala czerwone po zielonym', function () {
    signal.turn()
    expect(signal.red).toBe(true);
  })

  it('zapala tylko jedno swiatlo na raz', function () {
    var licznik = 0;

    if (signal.red) {
      licznik++;
    }

    if (signal.yellow) {
      licznik++;
    }

    if (signal.green) {
      licznik++;
    }

    expect(licznik).toEqual(1)
  })

})
