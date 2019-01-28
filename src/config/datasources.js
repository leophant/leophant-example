const MySQLConnector      = require('leophant-mysql');
const PostgreSQLConnector = require('leophant-postgresql');

module.exports = {
  db1: {
    connector: MySQLConnector,
    host: 'localhost',
    port: 5432,
    database: 'db1',
    username: 'username',
    password: 'password'
  },
  db2: {
    connector: PostgreSQLConnector,
    host: 'localhost',
    port: 5432,
    database: 'db2',
    username: 'username',
    password: 'password'
  }
};
