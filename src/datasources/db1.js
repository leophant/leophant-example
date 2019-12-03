const MySQLConnector = require('leophant-mysql');

module.exports = {
  name: 'db1',
  connector: MySQLConnector,
  host: 'localhost',
  port: 5432,
  database: 'db1',
  username: 'username',
  password: 'password'
};
