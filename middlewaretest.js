const express=require("express");
const path = require("node:path");
const app=express();
const router=express.Router();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

function  firstmid(err,req,res,next){
    const {username,password} = req.body;
    if(!err) {
        if (!username || !password) {
            res.status(401).send('Username or password is required');
        } else {
            next();
        }
    }else{
        res.status(400).send(err.message);
    }
}
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./files/login.html'));
})
app.post('/login',firstmid,(req,res)=>{
        if(req.body.username === 'Admin') {
            if(req.body.password === 'admin'){
                res.sendFile(path.join(__dirname,'app.html'));
            }else{
                res.status(401).send('Invalid password');
            }
        }else{
            res.status(401).send('Invalid Username');
        }
})

const port = 3000;
app.listen(port,()=>{
    console.log(`Server started on port http://localhost:${port}`);
})