const express = require('express');

//express app
const app = express();

//listen for requests
app.listen(7000);

app.get('/',(req,res) => {

  res.send('<p>Home Page</p>');
});

app.get('/about',(req,res) => {

  res.send('<p>About Page</p>');
});