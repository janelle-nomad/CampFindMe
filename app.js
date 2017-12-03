var express = require("express"); //require express
var app = express();

app.set("view engine", "ejs"); //set the 'ejs' view engine

//Call the root path
app.get("/", function(req, res) {
    res.render("landing");
});

//show all the campgrounds that the web app has
app.get("/campgrounds", function(req, res) {
    var campgrounds = [
        {name: "Granite Falls", image: "https://farm3.staticflickr.com/2928/14133964912_af1df5521d.jpg" },
        {name: "Appalation Hills", image: "https://farm4.staticflickr.com/3706/10718494266_56543a9eb7.jpg" },
        {name: "Lily Creek", image: "https://farm5.staticflickr.com/4134/4901707346_ec6b7d676a.jpg" }
    ]

    res.render("campgrounds", {campgrounds:campgrounds}); //data passing in to campgrounds
});

app.listen(3000, function() {
    console.log("The CampFindMe Server is up and running!");
});