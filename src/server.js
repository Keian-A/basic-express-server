'use strict';

const express = require('express');
const logger = require('./middlewares/logger.js');
const auth = require('./middlewares/validator.js');
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');

const app = express();

// Application-level routing
app.use(logger);
app.use(auth);

// Routes
// This first one should NOT work due to the auth application-level route being above, to fix you could put the auth inside the /person route as a parameter
app.get('/', (req, res) => {
  res.status(200).send('General `/` Route Achieved');
});

app.get('/person', (req, res) => {
  res.status(200).json({ "name": req.query.name });
});

// Error handlers
app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
  app.listen(port, () => console.log(`Server up on port ${port}`))
}

module.exports = {
  app: app,
  start: start
}
