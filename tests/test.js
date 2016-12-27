var async = require('async')
var API = require('../src/index.js')

var Sensor = new API.Sensor()
var Temperature = new Sensor.Temperature()

var Led = new API.Led()

Temperature.getTemperature(function(temp){
  Led.printText(`${Math.floor(temp)}°C`, [255, 255, 255])
})
