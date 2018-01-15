// Auto-generated. Do not edit!

// (in-package test_rosmaster.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Floats {
  constructor() {
    this.float32 = 0.0;
    this.float64 = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Floats
    // Serialize message field [float32]
    bufferInfo = _serializer.float32(obj.float32, bufferInfo);
    // Serialize message field [float64]
    bufferInfo = _serializer.float64(obj.float64, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Floats
    let tmp;
    let len;
    let data = new Floats();
    // Deserialize message field [float32]
    tmp = _deserializer.float32(buffer);
    data.float32 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [float64]
    tmp = _deserializer.float64(buffer);
    data.float64 = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rosmaster/Floats';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '1ee8aba2d870f75f2b5916e2cddbd928';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # for rostopic tests
    float32 float32
    float64 float64
    
    `;
  }

};

module.exports = Floats;
