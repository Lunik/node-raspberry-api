var spawn = require('child_process').spawn;
var path = require('path')

function Accelerometer(){}

Accelerometer.prototype.getAccelerometer = function(cb){
  var python = spawn('python', [path.join(__dirname, 'pysrc/accelerometer.py')])
  var acc = ''

  python.stdout.on('data', function(data){
    acc += data
  })

  python.stderr.on('finish', function(){
    cb(JSON.parse(acc))
  })
}

module.exports = Accelerometer
