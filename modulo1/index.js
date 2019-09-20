const http = require('http')
//usado para criar servidores simples

http
    .createServer((req, res) => {
        console.log(req);
        return res.end("Hello world in a web page!")
    })
    .listen(3000);