const express=require("express");
const session=require('express-session')
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret:"secret",
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge: 60000}
}))
app.get('/',(req,res)=>{
    if(req.session.views) {
        req.session.views++;
        res.send('Requested '+req.session.views+' times');
    }else{
        req.session.views=1;
        res.send('welcome to Home Page first time');

    }
})
app.get('/logout',(req,res)=>{
    req.session.destroy();
    res.send('Logged Out');
})
const port=3000;
app.listen(port,()=>{
    console.log('server running at http://localhost:%d',port);
})