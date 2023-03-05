const express=require('express');
const path=require('path');
const hbs=require('hbs');
const app=express();

const partialsPath= path.join(__dirname,'/views/partials');
const staticPath=path.join(__dirname,'/public');
app.set('view engine','hbs');
app.use(express.static(staticPath));
hbs.registerPartials(partialsPath);

app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/contact',(req,res)=>{
    res.render('contact');
});
app.get('/lectures',(req,res)=>{
    res.render('lectures');
});
app.get('/marks',(req,res)=>{
    res.render('marks');
});






app.listen(3000,()=>{console.log('Listening to port 3000')});