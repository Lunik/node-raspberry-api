
function Sensor(){
  this.Temperature = require('./temperature.js')
  this.Pressure = require('./pressure.js')
  this.Humidity = require('./humidity.js')
  this.Accelerometer = require('./accelerometer.js')
  this.Compass = require('./compass.js')
  this.Gyroscope = require('./gyroscope.js')
}

module.exports = Sensor
