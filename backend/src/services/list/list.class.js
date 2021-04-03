/* eslint-disable no-unused-vars */
exports.List = class List {
  constructor(options) {
    this.options = options || {};
  }

  async find(params) {
    console.log("a");
    const predictionsService = this.app.service("predictions");
    const predictions = await predictionsService.find(1, params);

    return predictions;
  }

  async setup(app, path) {
    (await super.setup) && super.setup(app, path);
    // for now no setup on Service
    // should Service adds a setup, it is unlikely that it wraps app to a
    // whole new object and assigns it to this, so we can still
    // assign app to this with a relative confidence
    this.app = app;
  }
};
