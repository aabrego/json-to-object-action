const core = require('@actions/core');

try {
  const jsonString = core.getInput('json-string');
  const resultObject = JSON.parse(jsonString);
  core.setOutput('object', resultObject);

} catch (error) {
  core.setFailed(error.message);
}