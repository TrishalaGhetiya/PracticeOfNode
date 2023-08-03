const http = require('http');
 
const server = http.createServer((req,res) => {
    console.log('Trishala');
})

server.listen(4000);