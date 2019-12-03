const PostgreSQLConnector = require('leophant-postgresql');

module.exports = {
  name: 'db2',
  connector: PostgreSQLConnector,
  host: 'localhost',
  port: 5432,
  database: 'db2',
  username: 'username',
  password: 'password'
};
