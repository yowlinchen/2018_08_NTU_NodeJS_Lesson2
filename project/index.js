// can't use HTML DOM, for example alert()
// let x = 3;
// console.log(x);

// load express package 
let express = require("express");
// create applicatoin object
let app = express();

app.get("/", function (req, res) {
    let obj = {
        x: 3,
        y: 4
    };
    res.send(obj);
});

// take care of /test request
// app.get("/test", function (req, res) {
//     res.send("<b>Hello</b> Test <script>alert('test');</script>");
// });

// // take care path / requirement
// app.get("/", function (req, res) {
//     res.send("Hello Node.js");
// });

// start the server at http://localhost:3000/
app.listen(3000, function () {
    console.log("Server Started");
})