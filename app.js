const http = require('http');
const fs = require('fs');
 
const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/')
    {
        try{
            const data = fs.readFileSync('message.txt');
            res.write('<html>');
            res.write('<head><title>My page</title></head>');
            res.write(`<body>${data.toString()}<form action="/message" method="POST"><input type="text" name="message"><br><button type="submit">SEND</button></form></body>`);
            res.write('</html>');
            return res.end();
        }
        catch(err){
            console.log(err);
        }
        
    }
    if(url === '/message' && method==='POST')
    {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.appendFile('message.txt', message, (err) => {
                if(err)
                    console.log(err);
            });
        })
        res.statusCode=302;
        res.setHeader('location','/');
        return res.end();
    }
        
})

server.listen(4000);