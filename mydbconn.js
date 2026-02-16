const express = require('express');
const path= require('path');
const mongoose = require('mongoose');
const parser= require('body-parser');
const app = express();
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
//mongoose.connect("mongodb:username:password://localhost:port/dbname")
mongoose.connect("mongodb://localhost:27017/mydb")
.then(() => {
    console.log('MongoDB Connected');
})
.catch((err) => {
    console.error(err);
})
//adding collection to mydb
const student=new mongoose.Schema(
    {
        name:String,
        email:String,
        password:String,
    }
)
const studentObj=new mongoose.model("Student",student);

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,'home.html'));
})
app.get("/form",(req,res)=>{
    res.sendFile(path.join(__dirname,'form.html'));
})
app.get('/submit',async(req,res)=>{

        const studentrec = new studentObj({
            name: req.query.name,
            email: req.query.email,
            password: req.query.password,
        });
        await studentrec.save();
        res.send("user created successfully");

})
app.get("/find", (req,res)=>{
    res.sendFile(path.join(__dirname,'find.html'));
})
app.get('/showdocs',async(req,res)=>{
    //find()-return all documents stored in given collection
        const user = await studentObj.find({email:req.query.email});
        if(!user[0]){
            return  res.status(404).send('User not found');
        }
        if(user[0].password === req.query.password){
            res.sendFile(path.join(__dirname,'calc.html'));
        }else{
            res.send('Invalid password');
        }

})
app.get("/update",(req,res)=>{
    res.sendFile(path.join(__dirname,'update.html'));
})
app.post("/search",async(req,res)=>{
    const {password,password1}=req.body;
    const rec=await studentObj.find({email:req.body.email});
  console.log(rec[0].name);
    if(!rec[0]){
        return res.status(404).send('User not found');
    }else{
        if(password){
            if(password1){
                if(password === password1){
                    rec[0].password = password;
                    rec[0].save();
                    res.send("user updated successfully" +
                        "<a href='/find'><button>Login</button></a>");
                }else{
                    return res.status(401).send('Password and comfirm password does not match');
                }
            }else{
                return res.status(401).send('Confirm password is empty');
            }
        }else{
            return res.status(401).send('password should not be empty');
        }
    }

})
app.get("/delete",(req,res)=>{
    res.sendFile(path.join(__dirname,'delete.html'));
})
app.get('/deleterec',async (req,res)=>{
    const rec = await studentObj.find({email:req.query.email});
    if(!rec[0]){
        res.send("User not found");
    }else{
        const result= await studentObj.deleteOne({email:req.query.email});
        res.send("User deleted successfully");
        console.log(result);
        }
})
const port=3000;
const host="localhost";
app.listen(port,host,()=>{
    console.log(`Listening on port http://${host}:${port}`);
})