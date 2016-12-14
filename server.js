var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post('/journey', function(req,res){
  console.log(req.body)
  res.send(req.body.data);
});

app.listen(2000);