const express = require("express");
const https = require("https");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
})




app.listen(3000, function() {
    console.log("server is listening on port 3000!");
})