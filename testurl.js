const http = require('http')
const fs = require("fs");
const hostname='localhost'
const port =3000
function logMessage(message) {
    const log = `${new Date()} : ${message}\n`;
    fs.appendFile('app.log', log, (err) => {
        if (err) console.log('Log failed');
    });
}
const server=http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    if(req.url === '/'){
        logMessage("User requested Home page");
        res.write('<h1>Home Page</h1>');
        res.write("<a href='/login'>Login</a>");
        res.end();
    }else if(req.url === '/login'){
        logMessage("User requested Login page");
        res.write("<a href='/'>Home</a>");
        res.write('<h1>Login Page</h1>');
        res.write("<input type='text' placeholder='Enter Username'/>");
        res.write("<input type='password' placeholder='Enter Password'/>");
        res.write("<button type='submit'>Login</button>");
        res.end();
    }
    res.end();
})

server.listen(port,()=>{
    console.log(`Server listening on port http://${hostname}:${port}`);
})
