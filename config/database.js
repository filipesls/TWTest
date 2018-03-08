var Datastore = require('nedb')
    ,dbName = 'db.db'
    ,db;

if(!db) {
    db = new Datastore({
        filename: dbName, 
        autoload: true 
    });
    console.log('Database ' + dbName + ' is ready')
}

module.exports = db;