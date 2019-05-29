const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(proxy('/sellorbuy', 
        { target: 'http://localhost:19998' }
    ));
}