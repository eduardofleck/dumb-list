const app = require('../../src/app');

describe('\'persons\' service', () => {
  it('registered the service', () => {
    const service = app.service('persons');
    expect(service).toBeTruthy();
  });
});
