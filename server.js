 //require express
 var express = require("express");
 //require bodyParser
 var bodyParser = require("body-parser");
 //require method-override
 var methodOverride = require("method-override");
 //make the port flexable weather herocku or routes
 var PORT = process.env.PORT || 3000;

 var app = express();

 // Serve static content for the app from the "public" directory in the application directory.
 app.use(express.static("public"));

 app.use(bodyParser.urlencoded({
     extended: false
 }));

 // Override with POST having ?_method=DELETE
 app.use(methodOverride("_method"));

 // Set Handlebars.
 var exphbs = require("express-handlebars");

 app.engine("handlebars", exphbs({
     defaultLayout: "main"
 }));
 app.set("view engine", "handlebars");

 // Import routes and give the server access to them.
 var routes = require("./controllers/burgersController.js");

 app.use("/", routes);

 app.listen(PORT);