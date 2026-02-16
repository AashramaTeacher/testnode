const express=require("express");
const app=express();
const router=express.Router();
app.use(express.static("public"));
//application level middleware
app.use((req,res,next)=>{
    //middleware
    next();
})
//specific Route Middleware
function middleware1(req, res, next) {
    console.log('hello');
    next();
}
function middleware2(req, res, next) {

    next();
}
app.get("/",middleware1,(req,res)=>{
    res.send("Hello World!");
});
app.get('/test',middleware2,(req,res)=>{
    res.send('Test url got value '+req.query.name);
});
router.get('/demo',(req,res)=>{
    res.send("URL created using router");
});
app.use('/hi',router);
router.use((req, res, next) => {
    console.log("Router middleware");
    next();
    });

router.get('/profile', (req, res) => {
 res.send("User Profile");
 });

 app.use('/user', router);

const port=3000;
const host="localhost";
app.listen(port,host,()=>{
    console.log(`Server Running at http://${host}:${port}`);
})