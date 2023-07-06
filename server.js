const express = require("express");
const path = require("path");
const app = express();


app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, './html_files', 'landingpage.html'));
});

app.use(express.static('html_files'));

app.listen(5500, function(){
    console.log("server is up at port 5500");
});
