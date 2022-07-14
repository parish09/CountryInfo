const express=require("express");
const bodyParser=require('body-parser');
const path=require("path");
const app=express();
// var country;
var urlencodedParser=bodyParser.urlencoded({extended: true});
// app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.render('home.ejs');
})
app.post('/',urlencodedParser,(req,res)=>{
    const country=(req.body.country);
    res.render('home.ejs');
})
// console.log(country);






app.listen(3000,()=>{
    console.log("Server Running Successfully!");
})