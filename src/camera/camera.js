var spawn = require('child_process').spawn;
var stream = require('stream')
var path = require('path')

function Camera(){}

Camera.prototype.capture = function(options){
  var parsedOptions = this.processOptions(options)
  if(parsedOptions === -1){
    return -1
  }
  var capture = spawn('raspistill', parsedOptions)

  var imgStream = new stream()

  capture.stderr.on('data', imgStream.emit.bind(imgStream, 'error'))
  capture.stdout.on('data', imgStream.emit.bind(imgStream, 'data'))
  capture.stdout.on('end', imgStream.emit.bind(imgStream, 'end'))
  capture.on('error', imgStream.emit.bind(imgStream, 'error'))

  return imgStream
}

Camera.prototype.film = function(options){
  var parsedOptions = this.processOptions(options)
  if(parsedOptions === -1){
    return -1
  }
  var film = spawn('raspivid', parsedOptions)

  var imgStream = new stream()

  film.stderr.on('data', imgStream.emit.bind(imgStream, 'error'))
  film.stdout.on('data', imgStream.emit.bind(imgStream, 'data'))
  film.stdout.on('end', imgStream.emit.bind(imgStream, 'end'))
  film.on('error', imgStream.emit.bind(imgStream, 'error'))

  return imgStream
}

Camera.prototype.processOptions = function(options){
  var opt = {
    width: {
      o: 'w',
      type: 'number',
      values: ['0 <=']
    },
    height: {
      o: 'h',
      type: 'number',
      values: ['0 <=']
    },
    quality: {
      o: 'q',
      type: 'number',
      values: ['0 <=', '100 =>']
    },
    raw: {
      o: 'r',
      type: 'boolean',
      values: null
    },
    output: {
      o: 'o',
      type: 'string',
      values: '.*'
    },
    timeout: {
      o: 't',
      type: 'number',
      values: ['0 <=']
    },
    encoding: {
      o: 'e',
      type: 'string',
      values: 'jpg|bmp|gif|png'
    },
    timelapse: {
      o: 'tl',
      type: 'number',
      values: ['0 <=']
    },
    mode: {
      o: 'md',
      type: 'number',
      values: ['0 <=', '7 =>']
    },
    opacity: {
      o: 'op',
      type: 'number',
      values: ['0 <=', '255 =>']
    },
    sharpness: {
      o: 'sh',
      type: 'number',
      values: ['-100 <=', '100 =>']
    },
    contrast: {
      o: 'co',
      type: 'number',
      values: ['-100 <=', '100 =>']
    },
    brightness: {
      o: 'br',
      type: 'number',
      values: ['0 <=', '100 =>']
    },
    saturation: {
      o: 'sa',
      type: 'number',
      values: ['-100 <= ', '100 =>']
    },
    vstab: {
      o: 'vs',
      type: 'boolean',
      values: null
    },
    awb: {
      o: 'awb',
      type: 'string',
      values: 'off|auto|sun|cloud|shade|tungsten|fluorescent|incandescent|flash|horizon'
    },
    exposure: {
      o: 'ex',
      type: 'string',
      values: 'auto|night|nightpreview|backlight|spotlight|sports|snow|beach|verylong|fixedfps|antishake|fireworks'
    },
    imxfx: {
      o: 'ifx',
      type: 'string',
      values: 'none|negative|solarise|posterise|whiteboard|blackboard|sketch|denoise|emboss|oilpaint|hatch|gpen|pastel|watercolour|film|blur|saturation|colourswap|washedout|colourpoint|colourbalance|cartoon'
    },
    metering: {
      o: 'mm',
      type: 'string',
      values: 'average|spot|backlit|matrix'
    },
    rotation: {
      o: 'rot',
      type: 'number',
      values: ['<= 0', '359 =>']
    },
    hflip: {
      o: 'hf',
      type: 'boolean',
      values: null
    },
    vflip: {
      o: 'vf',
      type: 'boolean',
      values: null
    },
    shutter: {
      o: 'ss',
      type: 'number',
      values: ['0 <=', '6000000 =>']
    }
  }
  var res = []
  for(var o in options){
    if(opt[o]){
      switch(opt[o].type){
        case 'number':
          if(typeof options[o] !== 'number'){
            console.error(options[o], 'is not a number')
            return -1
          }
          for(var i in opt[o].values){
            if(!eval(`${opt[o].values[i]} ${options[o]}`)){
              console.error(options[o], 'should be', opt[o].values[i])
              return -1
            }
          }
          res.push(`-${opt[o].o}`)
          res.push(options[o])
          break
        case 'string':
          if(typeof options[o] !== 'string'){
            console.error(options[o], 'is not a string')
            return -1
          }
          if(typeof options[o].match(opt[o].values) === 'undefined'){
            console.error(options[o], 'should match', opt[o].values)
            return -1
          }
          res.push(`-${opt[o].o}`)
          res.push(options[o])
          break
        case 'boolean':
          if(typeof options[o] !== 'boolean'){
            console.error(options[o], 'is not a boolean')
            return -1
          }
          res.push(`-${opt[o].o}`)
          break
      }
    }
  }

  return res
}
module.exports = Camera
