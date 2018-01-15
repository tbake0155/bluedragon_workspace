// Auto-generated. Do not edit!

// (in-package test_roscpp.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class EmbeddedExternal {
  constructor() {
    this.a = new std_msgs.msg.UInt8();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type EmbeddedExternal
    // Serialize message field [a]
    bufferInfo = std_msgs.msg.UInt8.serialize(obj.a, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type EmbeddedExternal
    let tmp;
    let len;
    let data = new EmbeddedExternal();
    // Deserialize message field [a]
    tmp = std_msgs.msg.UInt8.deserialize(buffer);
    data.a = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_roscpp/EmbeddedExternal';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a09b324865f98bbf605e59ed0cefbc1d';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    std_msgs/UInt8 a
    ================================================================================
    MSG: std_msgs/UInt8
    uint8 data
    
    `;
  }

};

module.exports = EmbeddedExternal;
