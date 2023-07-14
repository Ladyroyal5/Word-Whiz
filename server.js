const express = require("express");
const path = require("path");
const app = express();

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, './public', 'landingpage.html'));
});

app.use(express.static('public'));

app.listen(5500, function(){
    console.log("server is up at port 5500");
});