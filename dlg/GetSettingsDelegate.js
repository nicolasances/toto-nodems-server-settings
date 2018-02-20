var mongo = require('mongodb');
var config = require('../config');

var converter = require('../conv/SettingsConverter');

var MongoClient = mongo.MongoClient;

exports.getSettings = function() {

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      db.db(config.dbName).collection(config.collections.settings).find().toArray(function(err, array) {

        var response = {};

        if (array != null) response = converter.toSettingsTO(array[0]);

        db.close();

        success(response);

      });
    });

  });
}
