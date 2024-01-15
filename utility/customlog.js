const Rollbar = require('rollbar');

const logger = new Rollbar({
    // accessToken: 'e121fbfdef304e41b5d9a80f3f8813fd',
    // captureUncaught: true,
    // captureUnhandledRejections: true,
});

module.exports = { logger:console };
