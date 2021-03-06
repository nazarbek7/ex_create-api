//REST API demo in Node.js
const express = require('express'); // requre the express framework
const app = express();
const fs = require('fs'); //require file system object
const path = require('path');

// Index page
app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});
// CSS Prefixed
app.use(express.static(__dirname + '/'));

// Endpoint to Create a value
app.post('/createValue', function(req, res){
    fs.writeFile(__dirname + "/db/data.json", 'utf8', function(err, data){
        console.log(data);
        res.end(data); // you can also use res.send()
    });
})

let value = {
    "value7": {
        "id":7,
        "value": "77",
        "fix_value": "2",
        "result": "144"
    },
}

//The addUser endpoint
app.post('/createValue', function(req, res){
    //Step 2: read existing users
    fs.readFile(__dirname + "/db/users.json", 'utf8', function(err, data){
        data = JSON.parse(data);
        //Step 3: append user variable to list
        data["value7"] = value["value7"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

// Endpoint to Get a list of values
app.get('/getValue', function(req, res){
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