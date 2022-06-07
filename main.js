const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})


let wf = '_acaw _a6hd" href="/'
let text = '">< lzcic4wl _acan _acao _acat _acaw _a6hd" href="/tatianecorreia_/" role="link" tabindex="0">tatianecorreia_</a>'
let r = text.search(wf);
text = text.slice(r + 20);
r = text.search("/");
let user = text.slice(0, 15);
text = text.slice(15);
console.log(text);
console.log(r);
console.log(user);
let tt = text.search("æ")



