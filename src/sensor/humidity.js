var spawn = require('child_process').spawn;
var path = require('path')

function Humidity(){}

Humidity.prototype.getHumidity = function(cb){
  var python = spawn('python', [path.join(__dirname, 'pysrc/humidity.py')])
  var hum = ''

  python.stdout.on('data', function(data){
    hum += data
  })

  python.stderr.on('finish', function(){
    cb(hum)
  })
}

module.exports = Humidity
