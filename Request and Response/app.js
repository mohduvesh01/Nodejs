const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>ServerFirst</title></head>');
    res.write('<body>Like / Share /Subscribe </body>');
    res.write('</html>');
});
const port =3000;
server.listen(port,()=>{
    console.log(`Server is running on address http://localhost:${port}`);
})