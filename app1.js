const express = require('express');
const path=require('path');
const app = express();
const port =  3000;
const hostname = 'localhost';

app.use(express.urlencoded ({ extended: true }));
app.listen(port, hostname, () => {
    console.log(`Server started on port http://${hostname}:${port}`);
});

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./form.html'));
})
//form data is attached to url
app.get('/data',(req,res)=>{
    const username=req.query.username;
    res.send('Welcome,'+username);
})
app.post('/data',(req,res)=>{
    const {username}=req.body;
    if (username === 'admin'){
        res.send('Welcome,'+username);
    }else{
        res.send('please enter valid username');
    }
})


