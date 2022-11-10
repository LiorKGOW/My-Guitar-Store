process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

module.exports = environment.toWebpackConfig()

// Always start on the right foot :)
test('Example Test', () => {
  expect(true).toBe(true);
})
