'use strict';

module.exports = (req, res, next) => {
  if (req.query.name) {
    // If name query exists, this should pass the event loop to the next route handler
    next();
  } else {
    // This should trigger the error handler
    next({ 'Error': 'No name query found...' });
  }
}