const express=require('express');
const path=require('path');

const { randomInt } = require('crypto');
const app=express();

const staticPath=path.join(__dirname,'/public');
app.set('view engine','hbs');
app.use(express.static(staticPath));


app.get('/',(req,res)=>{
    res.render('index',{
        colour:"white"
    });
});
app.get('/random',(req,res)=>{
    res.render('index',{
        colour:`RGB(${randomInt(255)},${randomInt(255)},${randomInt(255)})`
    });
});
app.get('/:colour',(req,res)=>{
    res.render('index',{
        colour:req.params.colour
    });
});


app.listen(3000,()=>{console.log('Listening to port 3000')});