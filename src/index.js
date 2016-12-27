
function API(){
  this.Camera = require('./camera/camera.js')
  this.Led = require('./led/led.js')
  this.Sensor = require('./sensor/sensor.js')
}

module.exports = new API()
