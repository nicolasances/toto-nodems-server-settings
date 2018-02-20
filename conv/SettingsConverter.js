
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

  return {$set: {
    env: settings.env,
    apiUrl: settings.apiUrl,
    jhash: settings.jhash
  }};
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
