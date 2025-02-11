const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/shout', (req, res) => {
  let name=req.query.name;
  let uppercasename=name.toUpperCase();
  res.send(uppercasename);
});


app.get('/fullname',(req,res)=>{let fname=req.query.fname; let lname = req.query.lname; res.send(fname+lname)});

// app.get('/date',(req,res)=>{let month=req.query.month;let year =req.query.year; res.send(month+', '+year)});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
