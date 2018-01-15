// Auto-generated. Do not edit!

// (in-package test_rosbag.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Simple {
  constructor() {
    this.field1 = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Simple
    // Serialize message field [field1]
    bufferInfo = _serializer.int32(obj.field1, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Simple
    let tmp;
    let len;
    let data = new Simple();
    // Deserialize message field [field1]
    tmp = _deserializer.int32(buffer);
    data.field1 = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rosbag/Simple';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd13c87301de1ed73a1dd65764ac6019b';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 field1 #42
    `;
  }

};

module.exports = Simple;
