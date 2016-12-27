var spawn = require('child_process').spawn;
var stream = require('stream')
var path = require('path')

function Led(){}

Led.prototype.printIcon = function(name){
  if(typeof name === 'undefined'){
    return -1
  }
  var python = spawn('python', [path.join(__dirname, 'pysrc/printBMP.py'), path.join(__dirname, `images/${name}.bmp`)])

  return python
}

Led.prototype.printImage = function(path){
  if(typeof path === 'undefined'){
    return -1
  }
  var python = spawn('python', [path.join(__dirname, 'pysrc/printBMP.py'), path])

  return python
}

Led.prototype.printText = function(text, color){
  if(typeof text === 'undefined'
  && typeof color === 'object'
  && typeof color[0] === 'number'
  && typeof color[1] === 'number'
  && typeof color[2] === 'number'){
    return -1
  }

  var python = spawn('python', [path.join(__dirname, 'pysrc/printText.py'), color[0], color[1], color[2], text])

  return python
}

Led.prototype.clear = function(){
  var python = spawn('python', [path.join(__dirname, 'pysrc/clear.py')])

  return python
}

module.exports = Led
