var http = require('http')
    ,app = require('./config/express')
    ,db = require('./config/database');

http.createServer(app).listen(8080, function() {
    console.log('http://localhost:' + this.address().port);
});

