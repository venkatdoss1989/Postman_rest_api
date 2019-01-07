const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {MyModel} = require('./models/modeldef');
var {User} = require ('./models/user');


var app = express();

app.use(bodyParser.json());

app.post('/myModel',(req,res)=> {
  var doModel = new MyModel({
    name : req.body.name
  });

  doModel.save().then((doc)=> {
    res.send(doc);
  },(err) => {
    res.status(400).send(err);
  })
});

app.listen(3000,() => {
    console.log('Started on port 3000')
})

