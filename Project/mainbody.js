const {SumNum}= require('./operators');
const requestHandler = (req, res)=>{
    console.log(req.url, req.method);
    if(req.url === '/'){
        res.setHeader('Content-type', 'text/html');
    res.write(`
        <html>
        <head><title>Practice set</title></head>
        <body>
        <h1>Welcome to Calculator</h1>
        <a href="/calculator">Calculator</a>
   `)
   return res.end();
    }
    else if(req.url === '/calculator'){
        res.setHeader('Content-type', 'text/html');
        res.write(`
            <html>
            <head><title>Practice Set</title></head>
            <body>
            <form action="/calculator-result" method="POST">
            <h1> here is your calculator</h1>
            <input type="text" name="first" placeholder="Enter number" />
            <input type="text" name="second" placeholder="Enter number" />
            <input type="submit" value="Sum" />
            </form>
            </body>
        `)
        return res.end();
    }
    else if (req.url.toLowerCase() === '/calculator-result' && req.method === "POST"){
       return SumNum(req,res);
    }
}

exports.requestHandler =requestHandler;