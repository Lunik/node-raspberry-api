var async = require('async')
var API = require('../src/index.js')

var led = new API.Led()

led.printIcon('gmail')

setTimeout(function(){
  led.printIcon('facebook')
  setTimeout(led.clear, 2000)
}, 2000)
