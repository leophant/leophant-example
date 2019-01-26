const MySQLConnector      = require('leophant-mysql');
const PostgreSQLConnector = require('leophant-postgresql');

module.exports = [
  {
    name: 'db1',
    // TODO: rename to connectorClass?
    connector: MySQLConnector,
    host: 'localhost',
    port: 5432,
    database: 'db1',
    username: 'username',
    password: 'password'
  },
  {
    name: 'db2',
    // TODO: rename to connectorClass?
    connector: PostgreSQLConnector,
    host: 'localhost',
    port: 5432,
    database: 'db2',
    username: 'username',
    password: 'password'
  }
];
