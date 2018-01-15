// Auto-generated. Do not edit!

// (in-package test_rosbag.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Constants {
  constructor() {
    this.value = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Constants
    // Serialize message field [value]
    bufferInfo = _serializer.int32(obj.value, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Constants
    let tmp;
    let len;
    let data = new Constants();
    // Deserialize message field [value]
    tmp = _deserializer.int32(buffer);
    data.value = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rosbag/Constants';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b45401c4d442c4da7b0a2a105075fa4a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 CONSTANT=2
    int32 CONSTANT_TWO=42
    int32 value
    `;
  }

};

// Constants for message
Constants.Constants = {
  CONSTANT: 2,
  CONSTANT_TWO: 42,
}

module.exports = Constants;
