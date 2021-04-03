// Initializes the `persons` service on path `/persons`
const { Persons } = require('./persons.class');
const createModel = require('../../models/persons.model');
const hooks = require('./persons.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/persons', new Persons(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('persons');

  service.hooks(hooks);
};
