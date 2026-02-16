const http = require('http')
const hostname='localhost'
const port =3000
const server=http.createServer(function(req, res){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<h1>Login</h1>');
        res.write("<input type='text' placeholder='Enter Username'/>");
        res.write("<input type='password' placeholder='Enter Password'/>");
        res.write("<button type='submit'>Login</button>");
        res.end();
})

server.listen(port,()=>{
    console.log(`Server listening on port http://${hostname}:${port}`);
})
