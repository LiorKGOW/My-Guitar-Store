const { environment } = require('@rails/webpacker');
const { merge } = require('webpack-merge');
const customConfig = require('./custom');

// Merge custom config
// environment.config.merge(customConfig);
environment.config.merge({ devtool: 'none' });

console.log(environment)
module.exports = environment;
