var spawn = require('child_process').spawn;
var path = require('path')

function Humidity(){}

Humidity.prototype.getHumidity = function(cb){
  var python = spawn('python', [path.join(__dirname, 'pysrc/humidity.py')])
  var temp = ''

  python.stdout.on('data', function(data){
    temp += data
  })

  python.stderr.on('finish', function(){
    cb(temp)
  })
}

module.exports = Humidity
