
function Sensor(){
  this.Temperature = require('./temperature.js')
  this.Pressure = require('./pressure.js')
  this.Humidity = require('./humidity.js')
}

module.exports = Sensor
