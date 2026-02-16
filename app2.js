const express = require('express');
const path=require('path');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const port = 3000;
const host = '127.0.0.1';
app.listen(port, host,() => {
    console.log(`Server listening on http://${host}:${port}`);
});
app.get('/',(req, res) => {

    res.sendFile(path.join(__dirname, 'calc.html'));
})
app.post('/addition',(req,res)=>{
    const {x,y}=req.body;
    if (!x || !y){
        return res.status(400).send('Error code: 400, Message: Please enter a valid number');
    }else {

        const add = parseInt(x) + parseInt(y);
        return res.status(300).send('Addition:'+ add);
    }
})
