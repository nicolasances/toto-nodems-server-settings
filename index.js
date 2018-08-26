var express = require('express');
var Promise = require('promise');
var bodyParser = require("body-parser");
var logger = require('toto-apimon-events')

var getSettingsDlg = require('./dlg/GetSettingsDelegate');
var putSettingsDlg = require('./dlg/PutSettingsDelegate');
var initSettingsDlg = require('./dlg/InitSettingsDelegate');

initSettingsDlg.initSettings();

var apiName = 'server-settings';

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
  next();
});
app.use(bodyParser.json());
app.use(express.static('/app'));

app.get('/', function(req, res) {res.send({api: apiName, status: 'running'});});
app.get('/settings', function(req, res) {logger.apiCalled(apiName, '/settings', 'GET', req.query, req.params, req.body); getSettingsDlg.getSettings().then(function(result) {res.send(result);});});
app.put('/settings', function(req, res) {logger.apiCalled(apiName, '/settings', 'PUT', req.query, req.params, req.body); putSettingsDlg.putSettings(req.body).then(function(result) {res.send(result);});});

app.listen(8080, function() {
  console.log('Server Settings Microservice up and running');
});
