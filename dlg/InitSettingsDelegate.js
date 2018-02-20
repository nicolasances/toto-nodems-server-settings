var mongo = require('mongodb');
var config = require('../config');

var MongoClient = mongo.MongoClient;

var converter = require('../conv/SettingsConverter');

exports.initSettings = function(sett) {

  MongoClient.connect(config.mongoUrl, function(err, db) {

    db.db(config.dbName).collection(config.collections.settings).find().toArray(function(err, array) {

      if (err != null) console.log(err);

      db.db(config.dbName).collection(config.collections.settings).insertOne(converter.newSettings(), function(err, result) {

        if (err != null) console.log(err);

        db.close();

      });

    });

  });

}
