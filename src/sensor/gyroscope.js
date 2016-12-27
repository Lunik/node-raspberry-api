var spawn = require('child_process').spawn;
var path = require('path')

function Gyroscope(){}

Gyroscope.prototype.getGyroscope = function(cb){
  var python = spawn('python', [path.join(__dirname, 'pysrc/gyroscope.py')])
  var gyro = ''

  python.stdout.on('data', function(data){
    gyro += data
  })

  python.stderr.on('finish', function(){
    cb(JSON.parse(gyro))
  })
}

module.exports = Gyroscope
