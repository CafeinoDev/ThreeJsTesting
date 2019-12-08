const express = require('express');
const app = express();
const http = require('http').Server(app);

app.get('/', function (req, res){
    res.sendFile(__dirname + '/index.html');
})

app.use('/scripts', express.static(__dirname + '/node_modules/'));

http.listen(5000, function(){
    console.log('Listening on port 5000');
})