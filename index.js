const core = require('@actions/core');

var jsonString;
try {
  jsonString = core.getInput('json-string');
  const resultObject = JSON.parse(jsonString);
  core.setOutput('object', resultObject.result.url);

} catch (error) {
  core.setFailed(error.message + '\n\n' + jsonString);
}