const fs = require('fs')
fs.writeFile('./files/user.txt',"Hello,Node js User!",(err)=>{
    if(err){
        console.log('File creation Error');
    }else{
        console.log('File creation Complete');
    }
})
fs.readFile('./files/user.txt','utf-8',(err,data)=>{
    if(err){
        console.log('File Not Found Error');
    }else{
        console.log(data);
    }
})


