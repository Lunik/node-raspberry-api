var spawn = require('child_process').spawn;
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
  || typeof color === 'undefined'
  || typeof color[0] === 'undefined'
  || typeof color[1] === 'undefined'
  || typeof color[2] === 'undefined'){
    return -1
  }
  var python = spawn('python', [path.join(__dirname, 'pysrc/printText.py'), color[0], color[1], color[2], text])

  return python
}

Led.prototype.setPixel = function(x, y, color){
  if(typeof x === 'undefined'
  || typeof y === 'undefined'
  || typeof color === 'undefined'
  || typeof color[0] === 'undefined'
  || typeof color[1] === 'undefined'
  || typeof color[2] === 'undefined'){
    return -1
  }

  var python = spawn('python', [path.join(__dirname, 'pysrc/setPixel.py'), x, y, color[0], color[1], color[2]])

  return python
}

Led.prototype.getPixel = function(x, y, cb){
  if(typeof x === 'undefined'
  || typeof y === 'undefined'){
    return -1
  }

  var python = spawn('python', [path.join(__dirname, 'pysrc/getPixel.py'), x, y])
  var color = ''

  python.stdout.on('data', function(data){
    color += data
  })

  python.stderr.on('finish', function(){
    cb(JSON.parse(color))
  })
}

Led.prototype.clear = function(){
  var python = spawn('python', [path.join(__dirname, 'pysrc/clear.py')])

  return python
}

module.exports = Led
