const users = require("./users/users.service.js");
const persons = require("./persons/persons.service.js");
const predictions = require("./predictions/predictions.service.js");
const list = require('./list/list.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(persons);
  app.configure(predictions);
  app.configure(list);
};
