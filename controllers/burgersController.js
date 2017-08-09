 //requier express
 var express = require("express");
 //requier express.Router
 var router = express.Router();

 // Import the model (burger.js) to use its database functions.
 var burger = require("../models/burger.js");

 // Create all our routes and set up logic within those routes where required.
 //function to display all datas from the table
 router.get("/", function(req, res) {
     burger.all(function(data) {
         var hbsObject = {
             burgers: data
         };
         console.log(hbsObject);
         res.render("index", hbsObject);
     });
 });
 //function to add new burger name in the table
 router.post("/", function(req, res) {
     burger.create([
         "burger_name"
     ], [
         req.body.burger_name
     ], function() {
         res.redirect("/");
     });
 });
 //function to make devoured the datas 
 router.put("/:id", function(req, res) {
     var condition = "id = " + req.params.id;

     console.log("condition", condition);

     burger.update({
         devoured: req.body.devoured
     }, condition, function() {
         res.redirect("/");
     });
 });


 // Export routes for server.js to use.
 module.exports = router;