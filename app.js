// Setup

var express = require('express');
    app = express();

app.use(express.static("assets"));
app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("home")
});


app.listen(3000, function(){
    console.log("Serving app on port 3000");
});