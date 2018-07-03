config = require('dotenv-extended').load();

module.exports = {
  "development": {
    "username": config.DEV_DB_USER,
    "password": config.DEV_DB_PASSWORD,
    "database": config.DEV_DB_NAME,
    "host": config.DEV_DB_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": config.TEST_DB_USER,
    "password": config.TEST_DB_PASSWORD,
    "database": config.TEST_DB_NAME,
    "host": config.TEST_DB_HOST,
    "dialect": "mysql"
  }
}
