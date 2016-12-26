var spawn = require('child_process').spawn;
var stream = require('stream')
var path = require('path')

function Led(){}

Led.prototype.printIcon = function(name){
  if(typeof name === 'undefined'){
    return -1
  }
  var python = spawn('python', [path.join(__dirname, 'pysrc/printBMP.py'), path.join(__dirname, `images/${name}.bmp`)])

  var ledStream = new stream()

  python.stderr.on('data', ledStream.emit.bind(ledStream, 'error'))
  python.stdout.on('data', ledStream.emit.bind(ledStream, 'data'))
  python.stdout.on('end', ledStream.emit.bind(ledStream, 'end'))
  python.on('error', ledStream.emit.bind(ledStream, 'error'))

  return ledStream
}

Led.prototype.clear = function(){
  var python = spawn('python', [path.join(__dirname, 'pysrc/clear.py')])

  var ledStream = new stream()

  python.stderr.on('data', ledStream.emit.bind(ledStream, 'error'))
  python.stdout.on('data', ledStream.emit.bind(ledStream, 'data'))
  python.stdout.on('end', ledStream.emit.bind(ledStream, 'end'))
  python.on('error', ledStream.emit.bind(ledStream, 'error'))

  return ledStream
}

module.exports = Led
