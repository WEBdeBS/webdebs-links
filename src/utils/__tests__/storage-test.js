jest.dontMock('../storage');

const Storage = require('../storage');

const method = {
  get: () => JSON.stringify(['test']),
  set: jest.genMockFunction()
};

describe('Storage', function() {

  let storage;

  beforeEach(() => {
    storage = new Storage(method);
  });

  it('adds new values', function() {
    storage.add('test');
    expect(method.set).toBeCalled();
  });

  it('returns `true` if storage contains value', function() {
    const result = storage.contains('test');
    expect(result).toBe(true);
  });

  it('returns `false` if storage does not contains value', function() {
    const result = storage.contains('false');
    expect(result).toBe(false);
  });

});
