var Controller = require('toto-api-controller');

var getSettingsDlg = require('./dlg/GetSettingsDelegate');
var putSettingsDlg = require('./dlg/PutSettingsDelegate');
var initSettingsDlg = require('./dlg/InitSettingsDelegate');

initSettingsDlg.initSettings();

var apiName = 'server-settings';

var api = new Controller(apiName);

api.path('GET', '/settings', getSettingsDlg);
api.path('PUT', '/settings', putSettingsDlg);

api.listen();
