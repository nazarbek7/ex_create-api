//REST API demo in Node.js
const express = require('express'); // requre the express framework
const app = express();
const fs = require('fs'); //require file system object

// Endpoint to Get a list of users
app.get('/getUsers', function(req, res){
    fs.readFile(__dirname + "/db/" + "data.json", 'utf8', function(err, data){
        console.log(data);
        res.end(data); // you can also use res.send()
    });
})

// Create a server to listen at port 8080
const server = app.listen(8080, function(){
    const host = server.address().address
    const port = server.address().port
    console.log(`REST API app listening at http://localhost:${port}`)
})