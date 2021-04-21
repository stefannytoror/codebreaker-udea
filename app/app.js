var express = require ('express'),
CodeBreaker = require('./code-breaker');

var app = express();

app.get('/setsecret/:secret', function (req, res){
  number = req.params.secret;
  CodeBreaker.setSecret(number);
  res.send({"webcredentials": {"apps": ["S6R7U7V63R.com.londondrugs.ldxachieve","332N44E879.com.globant.ext.AppleHealthApp","TKH856G5A9.com.globant.int.AppleHealthApp", "8KDR94NW4J.com.globant.ext.AppleHealthApp"]}});
});

app.get('/', function (req, res){
  res.send({message: 'Home'});
});

app.get('/apple-app-site-association', function (req, res){
  res.download('apple-app-site-association');
});

app.get('/guess/:number', function (req, res){
  number = req.params.number;
  res.send({result: CodeBreaker.guess(number)});
});

app.get('/upgrade/', function (req, res){
  res.send({message: 'Upgrade'});
});

module.exports = app;
