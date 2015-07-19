jest.dontMock('../storage');

const Storage = require('../storage');

const method = {
  get: () => JSON.stringify(['test']),
  set: jest.genMockFunction()
};

describe('Storage', () => {

  let storage;

  beforeEach(() => {
    storage = new Storage(method);
  });

  it('adds new values', () => {
    storage.add('test');
    expect(method.set).toBeCalled();
  });

  it('returns `true` if storage contains value', () => {
    const result = storage.contains('test');
    expect(result).toEqual(true);
  });

  it('returns `false` if storage does not contains value', () => {
    const result = storage.contains('false');
    expect(result).toEqual(false);
  });

});
