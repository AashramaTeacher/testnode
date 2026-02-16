const express = require('express')
const path= require('path');
const app = express();
const port = 3000;
const hostname = 'localhost';

app.listen(port, hostname, () => {
    console.log(`Listening on port http://${hostname}:${port}`);
})
app.get('/',(req,res)=>{
    const filepath= path.resolve(__dirname,'./files/index.html');
    //res.send('<h1>welcome to HTML </h1>');
    //res.json({'Name':'Json'});
    res.sendFile(filepath);
});
app.get('/registration',(req,res)=>{
    const filepath= path.resolve(__dirname,'./files/registration.html');
    res.sendFile(filepath);
})
app.get('/userlogin',(req,res)=>{
    const filepath= path.resolve(__dirname,'./files/login.html');
    res.sendFile(filepath);
})
app.post('/register',(req,res)=>{
    res.send('User Registered!');
})
app.post('/login',(req,res)=>{
    res.send('User Logined!');  
})
/*
app.get() - this method is used to process user's get method request.
          - request and/or data comes along with URL
        1. using Hyperlinks
        2. using forms
 syntax:
 app.get('URL_Pattern',(request,response)=>{
        //code
        });
app.post() -> used to handle POST request
            -> Method execute the code when form is submitted
            using "post" method.
 syntax:
 app.post('URL_Pattern',(request,response)=>{
        //code
        });

response handling:
     * Express  functions will acts as controller(middleware)
     * these must handle response and request
     * to send response we can use three methods.
     1. res.send():
     it will return response to the client as per URL request.
     It will end request-response cycle.
     syntax:
     res.send('message/html code'); // by default it will convert
     //text/code into HTML format-> no need of MIME

     2. res.json()
        res.json({'key':value,...});
     3. res.sendFile()
     syntax:
     res.sendFile(filepath);
 HTML Files are static files -> you can send static files
 are response.

 you should resolve path -> use "path" module

 const path=require('path')

 path.resolve() -> used to resolve and make single URL for File
 Path
 syntax:
   path.resolve(__dirname,'./filepath')

*/