const express = require('express');
const { response } = require('express');
const app = express();

app.get("/", function(request, response) {
//console.log(request);
response.send('<h1>Hello World</h1>')
});

app.get("/about", function(req, res){
    res.send('<h1>Hello</h1>')
});

app.get("/contact", function(req, res){
    res.send('<p>Hello.world@gmail.com</p>')
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});