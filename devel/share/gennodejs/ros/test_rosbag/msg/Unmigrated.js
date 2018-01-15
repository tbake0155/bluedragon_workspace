// Auto-generated. Do not edit!

// (in-package test_rosbag.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Unmigrated {
  constructor() {
    this.field1 = 0;
    this.field2 = '';
    this.field3 = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Unmigrated
    // Serialize message field [field1]
    bufferInfo = _serializer.int32(obj.field1, bufferInfo);
    // Serialize message field [field2]
    bufferInfo = _serializer.string(obj.field2, bufferInfo);
    // Serialize message field [field3]
    bufferInfo = _serializer.float32(obj.field3, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Unmigrated
    let tmp;
    let len;
    let data = new Unmigrated();
    // Deserialize message field [field1]
    tmp = _deserializer.int32(buffer);
    data.field1 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [field2]
    tmp = _deserializer.string(buffer);
    data.field2 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [field3]
    tmp = _deserializer.float32(buffer);
    data.field3 = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rosbag/Unmigrated';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b5d640967dccef2a24697ec4b8a571ec';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32   field1 #12
    string  field2 #"uuiasjs"
    float32 field3 #61.7
    `;
  }

};

module.exports = Unmigrated;
