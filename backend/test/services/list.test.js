const app = require('../../src/app');

describe('\'list\' service', () => {
  it('registered the service', () => {
    const service = app.service('list');
    expect(service).toBeTruthy();
  });
});
