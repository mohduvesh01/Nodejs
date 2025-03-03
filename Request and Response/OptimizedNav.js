const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

if(req.url === '/home'){
    res.write('<h1> Welcome to home Page.')
    return res.end();
}
else if(req.url === '/men'){
    res.write('<h1> Welcome to men Page.')
    return res.end();
}
else if(req.url === '/women'){
    res.write('<h1> Welcome to women Page.')
    return res.end();
}
else if(req.url === '/kids'){
    res.write('<h1> Welcome to kids Page.')
    return res.end();
}
else if(req.url === '/cart'){
    res.write('<h1> Welcome to cart Page.')
    return res.end();
}
    res.setHeader('Content-type','text/html');
    res.write(`<html>
        <head>
            <title>Myntra</title>
        </head>
        <body>
        <h1> Navigation Bar</h1>
    <nav>
        <ul>
            <a href="/home">Home</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/cart">Cart</a>
        </ul>
    </nav>
        </body>
        </html>`)
})

const port = 3000;

server.listen(port, () => {
    console.log(`Server is running on address http://localhost:${port}`);
})