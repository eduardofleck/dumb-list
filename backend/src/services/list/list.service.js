// Initializes the `list` service on path `/list`
const { List } = require('./list.class');
const hooks = require('./list.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/list', new List(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('list');

  service.hooks(hooks);
};
