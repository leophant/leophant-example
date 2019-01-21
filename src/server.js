const Leophant = require('leophant');

const leophant = new Leophant({
  dataSources: require('./config/datasources'),
  models:      require('./config/models')
});

console.log(leophant);
