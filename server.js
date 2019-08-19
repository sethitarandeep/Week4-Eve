let express = require("express");
let app = express();

app.get('/', function(req, res){
    res.send('Hi Everyone, Welcome to Week 4.')
})
app.listen(4000);