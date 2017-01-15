var sh = require("shelljf");
var open = require("open");


sh.exec("node_modules\\.bin\\http-server",{async:true});


open("http://127.0.0.1:8080");