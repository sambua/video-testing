/**
 * Created by rashad on 11/13/16.
 */
var express = require('express');
var path = require('path');
var app = express();
const PORT = 3031;

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});

app.listen( PORT, function(){
  console.log('Server running on PORT: %s', PORT);
});
