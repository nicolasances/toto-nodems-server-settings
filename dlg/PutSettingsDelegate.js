var mongo = require('mongodb');
var config = require('../config');

var MongoClient = mongo.MongoClient;

var converter = require('../conv/SettingsConverter');

exports.do = function(req) {

  sett = req.body;

  return new Promise(function(success, failure) {

    MongoClient.connect(config.mongoUrl, function(err, db) {

      db.db(config.dbName).collection(config.collections.settings).updateOne({}, converter.update(sett), function(err, result) {

        if (err != null) console.log(err);

        db.close();

        success();

      });

    });
  });

}
