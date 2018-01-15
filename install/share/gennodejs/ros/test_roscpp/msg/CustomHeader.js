// Auto-generated. Do not edit!

// (in-package test_roscpp.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class CustomHeader {
  constructor() {
    this.a = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type CustomHeader
    // Serialize message field [a]
    bufferInfo = _serializer.uint32(obj.a, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type CustomHeader
    let tmp;
    let len;
    let data = new CustomHeader();
    // Deserialize message field [a]
    tmp = _deserializer.uint32(buffer);
    data.a = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_roscpp/CustomHeader';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a5233fa4f3f6e00d1d85da1779d19d1e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    uint32 a
    
    `;
  }

};

module.exports = CustomHeader;
