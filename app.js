const http = require('http');
 
const server = http.createServer((req,res) => {
    if(req.url==='/home')
        res.write('Welcome Home');
    else if(req.url==='/about')
        res.write('Welcome to About Us page');
    else if(req.url==='/node')
        res.write('Welcome to my Node Js project');

    res.end();
})

server.listen(4000);