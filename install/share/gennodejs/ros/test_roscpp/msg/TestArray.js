// Auto-generated. Do not edit!

// (in-package test_roscpp.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class TestArray {
  constructor() {
    this.counter = 0;
    this.float_arr = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TestArray
    // Serialize message field [counter]
    bufferInfo = _serializer.int32(obj.counter, bufferInfo);
    // Serialize the length for message field [float_arr]
    bufferInfo = _serializer.uint32(obj.float_arr.length, bufferInfo);
    // Serialize message field [float_arr]
    obj.float_arr.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TestArray
    let tmp;
    let len;
    let data = new TestArray();
    // Deserialize message field [counter]
    tmp = _deserializer.int32(buffer);
    data.counter = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [float_arr]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [float_arr]
    data.float_arr = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.float_arr[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_roscpp/TestArray';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'f7c2f87680985b118316f81f28b4cfd5';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 counter
    float64[] float_arr
    
    `;
  }

};

module.exports = TestArray;
