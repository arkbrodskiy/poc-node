// Setup

var express = require('express'),
    app = express()


app.get("/", function(req, res){
    res.render("home.ejs")
});


app.listen(3000, function(){
    console.log("Serving app on port 3000");
});