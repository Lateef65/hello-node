const http = require('http');

//create server object
http.createServer((req, res) => {

    //write response
    res.write('stupid boy ode omo');
    res.end();

}).listen(2900, () => {    //listen to port 3000
    console.log('Server is running on port 3000');
})