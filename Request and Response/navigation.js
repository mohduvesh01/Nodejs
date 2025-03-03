const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
if(req.url === '/'){
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title> Myntra </title></head>');
    res.write('<body><h1> Navigation Bar</h1>');
    res.write('<a href="/home">Home</a><br>');
    res.write('<a href="/men">Men</a><br>');
    res.write('<a href="/women">Women</a><br>');
    res.write('<a href="/kids">Kids</a><br>');
    res.write('<a href="/cart">Cart</a>');
    return res.end();
}
else if(req.url === '/home'){
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>You are at home page </title></head>');
    res.write('<body><p>Welcome to Home Page</p>');
    res.write('</body>');
    res.write('</html>');
    //res.statusCode = 302;
   // res.setHeader('Location', '/home');
    res.end();
}
else if(req.url === '/home'){
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>You are at home page </title></head>');
    res.write('<body><p>Welcome to Home Page</p>');
    res.write('</body>');
    res.write('</html>');
    //res.statusCode = 302;
   // res.setHeader('Location', '/home');
    res.end();
}
else if(req.url === '/men'){
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>You are at men page </title></head>');
    res.write('<body><p>Welcome to Men Page</p>');
    res.write('</body>');
    res.write('</html>');
    //res.statusCode = 302;
   // res.setHeader('Location', '/home');
    res.end();
}
else if(req.url === '/women'){
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>You are at women page </title></head>');
    res.write('<body><p>Welcome to Women Page</p>');
    res.write('</body>');
    res.write('</html>');
    //res.statusCode = 302;
   // res.setHeader('Location', '/home');
    res.end();
}
else if(req.url === '/kids'){
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>You are at kids page </title></head>');
    res.write('<body><p>Welcome to Kids Page</p>');
    res.write('</body>');
    res.write('</html>');
    //res.statusCode = 302;
   // res.setHeader('Location', '/home');
    res.end();
}
else if(req.url === '/cart'){
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>You are at cart page </title></head>');
    res.write('<body><p>Welcome to Cart Page</p>');
    res.write('</body>');
    res.write('</html>');
    //res.statusCode = 302;
   // res.setHeader('Location', '/home');
    res.end();
}
})


const port =3000;
server.listen(port,()=>{
    console.log(`Server is running on address http://localhost:${port}`);
})