const promise = require('bluebird');
const options = {
    promiseLib: promise,
    query: (e) => {}
}

const pgp = require('pg-promise')(options);
const types = pgp.pg.types;
types.setTypeParser(1114, function(stringValue) {
    return stringValue;
});

const databaseConfig = {
    'host': 'containers-us-west-93.railway.app',
    'port': 7410,
    'database': 'railway',
    'user': 'postgres',
    'password': 'VHeCvedUwH6UMlEF8cez',
    'ssl':{rejectUnauthorized:false}
};

const db = pgp(databaseConfig);

module.exports = db;