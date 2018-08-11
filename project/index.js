// load express package 
let express = require("express");
// create applicatoin object
let app = express();

// Take care /image request
/*
    use path to get the flexibility
    http://localhost:3000/image/landscape.jpg
    http://localhost:3000/image/package.jpg
 */
app.get("/image/*", function (req, res) {
    let path = req.path;
    let name = path.replace("/image/", "");
    // res.send(path);
    res.download("./" + name);
});

// Take care of / request
app.get("/", function (req, res) {
    // get connection method
    console.log(req.method);
    console.log(req.ip);
    console.log(req.hostname);
    // get request header
    let lang = req.get("Accept-Language");
    console.log(lang);
    res.send("<h3>My Image</h3><img src='/image/landscape.jpg' />");
    // set rsponse header
    // res.set("test", "my header");
    // let obj = {
    //     x: 3,
    //     y: 4
    // };
    // // res.send(obj);
    // res.send(obj);
});

// start the server at http://localhost:3000/
app.listen(3000, function () {
    console.log("Server Started");
})