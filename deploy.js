const u = require('wlj-utilities');

require('./build');

const command = `aws s3 sync ./web s3://intralinear`;
const output = u.executeCommand(command);
console.log(output);