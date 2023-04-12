const express = require('express');
const veggieArray = require('./models/data');

const   PORT = 3000;
//create express app
const app= express();

//====view template config=====
app.set('view engine','jsx');
app.engine('jsx',require('jsx-view-engine').createEngine())


//define routes
app.get('/',(req,res)=>{
    res.send('hello');
})

app.get('/bye',(req,res)=>{
    res.send('<h1>bye</h1>');
})

app.get('/quote',(req,res)=>{
    res.send('<h1>happiness is a state of mind</h1>');
})

app.get('/quote/anotherquote',(req,res)=>{
    res.send('<h1>dont try to be best ,do your best</h1>');
})


app.get('/veggies',(req,res)=>{
    //res.send(veggieArray);
    res.render('Allveggies',{veggieArray:veggieArray});
    
})

app.get('/veggies/ripeveggies',(req,res)=>{
    res.render('Ripeveggies',{vegArray:veggieArray});
})

app.get('/veggies/anotherveggie/indexofVeggies',(req,res)=>{
    res.send('<h1>Another veggie</h1>');
})





app.get('/veggies/:indexofVeggies',(req,res)=>{
    res.send(veggieArray[req.params.indexofVeggies]);
})
/** doesn't work 
app.get('/veggies/anotherveggie',(req,res)=>{
    res.send('<h1>another veggie too</h1>');
})*/


//tell app to listen at port 
app.listen(3000,function(){
    console.log(`listening to port :${PORT}`);
})