// Auto-generated. Do not edit!

// (in-package test_rosmaster.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class RosmsgA {
  constructor() {
    this.a = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RosmsgA
    // Serialize message field [a]
    bufferInfo = _serializer.int32(obj.a, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type RosmsgA
    let tmp;
    let len;
    let data = new RosmsgA();
    // Deserialize message field [a]
    tmp = _deserializer.int32(buffer);
    data.a = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rosmaster/RosmsgA';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '5c9fb1a886e81e3162a5c87bf55c072b';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 a
    
    `;
  }

};

module.exports = RosmsgA;
