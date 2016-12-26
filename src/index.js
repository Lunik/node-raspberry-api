
function API(){
  this.Camera = require('./camera/camera.js')
  this.Led = require('./led/led.js')
}

module.exports = new API()
