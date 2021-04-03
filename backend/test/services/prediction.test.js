const app = require('../../src/app');

describe('\'prediction\' service', () => {
  it('registered the service', () => {
    const service = app.service('prediction');
    expect(service).toBeTruthy();
  });
});
