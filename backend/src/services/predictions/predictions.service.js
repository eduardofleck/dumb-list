// Initializes the `predictions` service on path `/predictions`
const { Predictions } = require('./predictions.class');
const createModel = require('../../models/predictions.model');
const hooks = require('./predictions.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/predictions', new Predictions(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('predictions');

  service.hooks(hooks);
};
