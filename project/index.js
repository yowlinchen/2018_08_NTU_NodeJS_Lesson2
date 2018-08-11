// can't use HTML DOM, for example alert()
// let x = 3;
// console.log(x);

// load express package 
let express = require("express");
// create applicatoin object
let app = express();

// Take care /image request
/*
    http://主機名稱/路徑?參數列表
    參數列表：
        參數名稱=參數資料＆參數名稱＝參數資料&...
    例如：
        http://localhost:3000/image?name=landscape.jpg
*/
app.get("/image", function (req, res) {
    // use req.query.參數名稱 to get HTTP 參數
    let name = req.query.name;
    // res.send(name);
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
    res.send("<h3>My Image</h3><img src='/image?name=landscape.jpg' />");
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