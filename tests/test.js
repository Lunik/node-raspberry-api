var async = require('async')
var API = require('../src/index.js')

var Sensor = new API.Sensor()
var Humidity = new Sensor.Humidity()

var Led = new API.Led()

Humidity.getHumidity(function(pres){
  Led.printText(`${pres}`, [255, 255, 255])
})
