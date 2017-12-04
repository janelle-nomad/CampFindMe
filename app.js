var express = require("express"); //require express
var app = express();
var bodyParser = require("body-parser"); //populate middleware

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs"); //set the 'ejs' view engine

// TODO:Put the campgrounds into a Database.
var campgrounds = [
    {name: "Granite Falls", image: "https://farm3.staticflickr.com/2928/14133964912_af1df5521d.jpg" },
    {name: "Appalation Hills", image: "https://farm4.staticflickr.com/3706/10718494266_56543a9eb7.jpg" },
    {name: "Lily Creek", image: "https://farm5.staticflickr.com/4134/4901707346_ec6b7d676a.jpg" }
]


//Call the root path
app.get("/", function(req, res) {
    res.render("landing");
});

//show all the campgrounds that the web app has
app.get("/campgrounds", function(req, res) {

    res.render("campgrounds", {campgrounds:campgrounds}); //data passing in to campgrounds
});

app.post("/campgrounds", function(req, res) {
    //get data from form, and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image} //campground object
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds"); //defaults to a get request
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
})

app.listen(3000, function() {
    console.log("The CampFindMe Server is up and running!");
});