// Auto-generated. Do not edit!

// (in-package test_roscpp.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class FixedLength {
  constructor() {
    this.a = 0;
    this.b = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type FixedLength
    // Serialize message field [a]
    bufferInfo = _serializer.uint32(obj.a, bufferInfo);
    // Serialize message field [b]
    bufferInfo = _serializer.float32(obj.b, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type FixedLength
    let tmp;
    let len;
    let data = new FixedLength();
    // Deserialize message field [a]
    tmp = _deserializer.uint32(buffer);
    data.a = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [b]
    tmp = _deserializer.float32(buffer);
    data.b = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_roscpp/FixedLength';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '74143e1090cf694294f589605908b555';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    uint32 a
    float32 b
    
    `;
  }

};

module.exports = FixedLength;
