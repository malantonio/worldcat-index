var fs = require('fs')
  , path = require('path')
    ;

module.exports = JSON.parse(fs.readFileSync(path.join(__dirname, 'worldcat-indicies.json')));