// can't use HTML DOM, for example alert()
// let x = 3;
// console.log(x);

// load express package 
let express = require("express");
// create applicatoin object
let app = express();

// Take care /image request
app.get("/image", function (req, res) {
    res.download("./landscape.jpg");
});

// Take care of / request
app.get("/", function (req, res) {
    res.send("<h3>My Image</h3><img src='/image' />");
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