const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Company = require('./models/company');

const app = express();

mongoose.connect("mongodb+srv://sayalak:da8Og5DqRTeWzXle@cluster0.xa0wu.mongodb.net/node-angular?retryWrites=true&w=majority")
  .then(() => {
    console.log('Connect to database!');
  })
  .catch(() => {
    console.log('Connection failed');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods",
   "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/companys", (req, res, next) => {
  const company = new Company({
    companyname: req.body.companyname,
    remark: req.body.remark
  });
  company.save();
  res.status(201).json({
    message: 'Post added successfully'
  });
});

app.get('/api/companys', (req, res, next) => {
  const companys = [
    {
      id: "akssfasffka;",
      companyname: "librarysoft company",
      remark: "remark from librarysoft company"
    },
    {
      id: "aasfffasffka;",
      companyname: "librarysoft company branch1",
      remark: "remark from librarysoft company1"
    },
    {
      id: "aasff444ffka;",
      companyname: "librarysoft company branch2",
      remark: "remark from librarysoft company2"
    }
  ]
  res.status(200).json({
    message: 'posts fetched succesfully',
    companys: companys
  });
});

module.exports = app;
