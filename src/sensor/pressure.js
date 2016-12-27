var spawn = require('child_process').spawn;
var path = require('path')

function Pressure(){}

Pressure.prototype.getPressure = function(cb){
  var python = spawn('python', [path.join(__dirname, 'pysrc/pressure.py')])
  var pres = ''

  python.stdout.on('data', function(data){
    pres += data
  })

  python.stderr.on('finish', function(){
    cb(pres)
  })
}

module.exports = Pressure
