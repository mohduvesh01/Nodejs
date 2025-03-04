const http = require('http');
const fs = require('fs');
const { buffer } = require('stream/consumers');
const server = http.createServer((req,res)=>{
    console.log(req.url, req.method);
    if(req.url === '/'){
        res.setHeader('Content-type','text/html');
        res.write(`
            <html>
            <head><title>ReadingChuncks</title></head>
            <body>
        <form action="/submit-details" method="POST">
            <h1>Enter your details</h1>
            <input type="text" name="username" placeholder="Enter your name">
            <br><label for="male">Male</label>
            <input type="radio" id="male" name="gender" value="male">
            <label for="female">Female</label>
            <input type="radio" id="female" name="gender" value="female">
            <br><input type="submit" value="Submit">
        </form>
            </html>
            `)
        return res.end();
    }
    else if( req.url.toLowerCase() === '/submit-details' && req.method == 'POST'){
        // Reading Chunk
      const body = [];
        req.on('data', chunk =>{
            console.log(chunk);
            body.push(chunk);
        req.on('end',()=>{
            const fullBody = Buffer.concat(body).toString();
            console.log(fullBody);
        })
        })

        fs.writeFileSync('getUser.txt','Mohd Uvesh');
        res.statusCode = 302;
        res.setHeader('Location','/');
    }
    res.setHeader('Content-type','text/html');
    res.write(`
        <html>
        <head><title>I'm on submit page'</title></head>
        <body><p>Like, share, Subscribe</p></body>
        </html>
        `)

   
})

const port = 3000;
server.listen(port,()=>{
    console.log(`Server is running on address http://localhost:${port}`);
})