// Auto-generated. Do not edit!

// (in-package test_roscpp.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class TestStringInt {
  constructor() {
    this.str = '';
    this.counter = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TestStringInt
    // Serialize message field [str]
    bufferInfo = _serializer.string(obj.str, bufferInfo);
    // Serialize message field [counter]
    bufferInfo = _serializer.int32(obj.counter, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TestStringInt
    let tmp;
    let len;
    let data = new TestStringInt();
    // Deserialize message field [str]
    tmp = _deserializer.string(buffer);
    data.str = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [counter]
    tmp = _deserializer.int32(buffer);
    data.counter = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_roscpp/TestStringInt';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '2f0ceb8aa4bbf4dbd240039d0bf240ca';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string str
    int32 counter
    
    `;
  }

};

module.exports = TestStringInt;
