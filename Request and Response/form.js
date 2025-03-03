const http = require('http');

const server =http.createServer((req,res)=>{
if(req.url="/"){
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>my First form</title></head>');
    res.write('<body>Complete your Form');
    res.write('<form action="/ submit-form" method="POST"> ');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
    res.write('<label for="male">Male</label>')
    res.write('<input type="radio" id="male" name="gender" value="male" />')
    res.write('<label for="female">Female</label>')
    res.write('<input type="radio" id="female" name="gender" value="female" />')
    res.write('<br><input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
}
})
const port =3000;
server.listen(port,()=>{
    console.log(`Server is running on address http://localhost:${port}`);
})