const app = require('../../src/app');

describe('\'predictions\' service', () => {
  it('registered the service', () => {
    const service = app.service('predictions');
    expect(service).toBeTruthy();
  });
});
