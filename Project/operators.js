const SumNum = (req,res)=>{

    const body= [];
    req.on('data', chunk => body.push(chunk));
    req.on('end',()=>{
        const fullBody=Buffer.concat(body).toString();
        console.log(fullBody);
        const params = new URLSearchParams(fullBody);
        console.log(params);
        const bodObj = Object.fromEntries(params);
        console.log(bodObj);
        const result = Number(bodObj.first) + Number(bodObj.second);
        console.log(result);
    res.setHeader('Content-type', 'text/html');
    res.write(`
        <html>
        <head><title>Calculator Result page</title></head>
        <body>
        <p>Sum of two number is:${result}</p>
        </body>
        </html>
    `)
    return res.end();
    });
    
    
}

exports.SumNum = SumNum ;