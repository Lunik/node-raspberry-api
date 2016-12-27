var spawn = require('child_process').spawn;
var path = require('path')

function Compass(){}

Compass.prototype.getNorth = function(cb){
  var python = spawn('python', [path.join(__dirname, 'pysrc/compass.py')])
  var north = ''

  python.stdout.on('data', function(data){
    north += data
  })

  python.stderr.on('finish', function(){
    cb(north)
  })
}

module.exports = Compass
