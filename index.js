const express=require("express");
const bodyParser=require('body-parser');
const path=require("path");
const app=express();
const request = require('request');
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
    var info;
    request.get({
        url: `https://api.api-ninjas.com/v1/country?name=${country}`,
        headers: {
          'X-Api-Key': 'wxLUXarpW2HiFE6Hk29PJA==r6QMFLoXisSWguKo'
        },
      }, function(error, response, body) {
        if(error) return console.error('Request failed:', error);
        else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
        else {
            info=JSON.parse(body);
            console.log(info);
            if(info.length==0)res.send("cant find country");
            else res.render('country.ejs',{info:info});
        }
      });
})







app.listen(3000,()=>{
    console.log("Server Running Successfully!");
})