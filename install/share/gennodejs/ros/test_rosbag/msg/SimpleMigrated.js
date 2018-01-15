// Auto-generated. Do not edit!

// (in-package test_rosbag.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class SimpleMigrated {
  constructor() {
    this.data = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SimpleMigrated
    // Serialize message field [data]
    bufferInfo = _serializer.int32(obj.data, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SimpleMigrated
    let tmp;
    let len;
    let data = new SimpleMigrated();
    // Deserialize message field [data]
    tmp = _deserializer.int32(buffer);
    data.data = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rosbag/SimpleMigrated';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'da5909fbe378aeaf85e547e830cc1bb7';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 data # 42
    `;
  }

};

module.exports = SimpleMigrated;
