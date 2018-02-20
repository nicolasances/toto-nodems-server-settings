
/**
 * Converts the Mongo JSON into a TO
 */
exports.toSettingsTO = function(json) {

  return {
      env : json.env,
      apiUrl : json.apiUrl,
      jhash : json.jhash
  };

}

/**
 * Updates the settings
 */
exports.update = function(settings) {

  var update = {};

  if (settings.env != null) update.env = settings.env;
  if (settings.apiUrl != null) update.apiUrl = settings.apiUrl;
  if (settings.jhash != null) update.jhash = settings.jhash;

  return {$set: update};
}

/**
 * Creates new settings
 */
exports.newSettings = function() {

  return {
    env: null,
    apiUrl: null,
    jhash: null
  };

}
