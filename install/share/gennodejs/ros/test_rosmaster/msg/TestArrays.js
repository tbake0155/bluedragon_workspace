// Auto-generated. Do not edit!

// (in-package test_rosmaster.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let TestString = require('./TestString.js');

//-----------------------------------------------------------

class TestArrays {
  constructor() {
    this.caller_id = '';
    this.orig_caller_id = '';
    this.int32_array = [];
    this.float32_array = [];
    this.time_array = [];
    this.test_string_array = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TestArrays
    // Serialize message field [caller_id]
    bufferInfo = _serializer.string(obj.caller_id, bufferInfo);
    // Serialize message field [orig_caller_id]
    bufferInfo = _serializer.string(obj.orig_caller_id, bufferInfo);
    // Serialize the length for message field [int32_array]
    bufferInfo = _serializer.uint32(obj.int32_array.length, bufferInfo);
    // Serialize message field [int32_array]
    obj.int32_array.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    // Serialize the length for message field [float32_array]
    bufferInfo = _serializer.uint32(obj.float32_array.length, bufferInfo);
    // Serialize message field [float32_array]
    obj.float32_array.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    // Serialize the length for message field [time_array]
    bufferInfo = _serializer.uint32(obj.time_array.length, bufferInfo);
    // Serialize message field [time_array]
    obj.time_array.forEach((val) => {
      bufferInfo = _serializer.time(val, bufferInfo);
    });
    // Serialize the length for message field [test_string_array]
    bufferInfo = _serializer.uint32(obj.test_string_array.length, bufferInfo);
    // Serialize message field [test_string_array]
    obj.test_string_array.forEach((val) => {
      bufferInfo = TestString.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TestArrays
    let tmp;
    let len;
    let data = new TestArrays();
    // Deserialize message field [caller_id]
    tmp = _deserializer.string(buffer);
    data.caller_id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [orig_caller_id]
    tmp = _deserializer.string(buffer);
    data.orig_caller_id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [int32_array]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [int32_array]
    data.int32_array = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int32(buffer);
      data.int32_array[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [float32_array]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [float32_array]
    data.float32_array = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.float32_array[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [time_array]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [time_array]
    data.time_array = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.time(buffer);
      data.time_array[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [test_string_array]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [test_string_array]
    data.test_string_array = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = TestString.deserialize(buffer);
      data.test_string_array[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rosmaster/TestArrays';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '4cc9b5e2cebe791aa3e994f5bc159eb6';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # caller_id of most recent node to send this message
    string caller_id
    # caller_id of the original node to send this message
    string orig_caller_id
    
    int32[] int32_array
    float32[] float32_array
    time[] time_array
    TestString[] test_string_array
    # TODO: array of arrays
    
    ================================================================================
    MSG: test_rosmaster/TestString
    # Integration test message
    # caller_id of most recent node to send this message
    string caller_id
    # caller_id of the original node to send this message
    string orig_caller_id
    string data
    
    `;
  }

};

module.exports = TestArrays;
