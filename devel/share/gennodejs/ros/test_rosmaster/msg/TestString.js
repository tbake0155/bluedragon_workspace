// Auto-generated. Do not edit!

// (in-package test_rosmaster.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class TestString {
  constructor() {
    this.caller_id = '';
    this.orig_caller_id = '';
    this.data = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TestString
    // Serialize message field [caller_id]
    bufferInfo = _serializer.string(obj.caller_id, bufferInfo);
    // Serialize message field [orig_caller_id]
    bufferInfo = _serializer.string(obj.orig_caller_id, bufferInfo);
    // Serialize message field [data]
    bufferInfo = _serializer.string(obj.data, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TestString
    let tmp;
    let len;
    let data = new TestString();
    // Deserialize message field [caller_id]
    tmp = _deserializer.string(buffer);
    data.caller_id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [orig_caller_id]
    tmp = _deserializer.string(buffer);
    data.orig_caller_id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [data]
    tmp = _deserializer.string(buffer);
    data.data = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rosmaster/TestString';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '334ff4377be93faa44ebc66d23d40fd3';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Integration test message
    # caller_id of most recent node to send this message
    string caller_id
    # caller_id of the original node to send this message
    string orig_caller_id
    string data
    
    `;
  }

};

module.exports = TestString;
