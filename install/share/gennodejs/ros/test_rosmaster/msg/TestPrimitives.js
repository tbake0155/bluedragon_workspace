// Auto-generated. Do not edit!

// (in-package test_rosmaster.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class TestPrimitives {
  constructor() {
    this.caller_id = '';
    this.orig_caller_id = '';
    this.str = '';
    this.b = 0;
    this.int16 = 0;
    this.int32 = 0;
    this.int64 = 0;
    this.c = 0;
    this.uint16 = 0;
    this.uint32 = 0;
    this.uint64 = 0;
    this.float32 = 0.0;
    this.float64 = 0.0;
    this.t = {secs: 0, nsecs: 0};
    this.d = {secs: 0, nsecs: 0};
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TestPrimitives
    // Serialize message field [caller_id]
    bufferInfo = _serializer.string(obj.caller_id, bufferInfo);
    // Serialize message field [orig_caller_id]
    bufferInfo = _serializer.string(obj.orig_caller_id, bufferInfo);
    // Serialize message field [str]
    bufferInfo = _serializer.string(obj.str, bufferInfo);
    // Serialize message field [b]
    bufferInfo = _serializer.byte(obj.b, bufferInfo);
    // Serialize message field [int16]
    bufferInfo = _serializer.int16(obj.int16, bufferInfo);
    // Serialize message field [int32]
    bufferInfo = _serializer.int32(obj.int32, bufferInfo);
    // Serialize message field [int64]
    bufferInfo = _serializer.int64(obj.int64, bufferInfo);
    // Serialize message field [c]
    bufferInfo = _serializer.char(obj.c, bufferInfo);
    // Serialize message field [uint16]
    bufferInfo = _serializer.uint16(obj.uint16, bufferInfo);
    // Serialize message field [uint32]
    bufferInfo = _serializer.uint32(obj.uint32, bufferInfo);
    // Serialize message field [uint64]
    bufferInfo = _serializer.uint64(obj.uint64, bufferInfo);
    // Serialize message field [float32]
    bufferInfo = _serializer.float32(obj.float32, bufferInfo);
    // Serialize message field [float64]
    bufferInfo = _serializer.float64(obj.float64, bufferInfo);
    // Serialize message field [t]
    bufferInfo = _serializer.time(obj.t, bufferInfo);
    // Serialize message field [d]
    bufferInfo = _serializer.duration(obj.d, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TestPrimitives
    let tmp;
    let len;
    let data = new TestPrimitives();
    // Deserialize message field [caller_id]
    tmp = _deserializer.string(buffer);
    data.caller_id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [orig_caller_id]
    tmp = _deserializer.string(buffer);
    data.orig_caller_id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [str]
    tmp = _deserializer.string(buffer);
    data.str = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [b]
    tmp = _deserializer.byte(buffer);
    data.b = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [int16]
    tmp = _deserializer.int16(buffer);
    data.int16 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [int32]
    tmp = _deserializer.int32(buffer);
    data.int32 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [int64]
    tmp = _deserializer.int64(buffer);
    data.int64 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [c]
    tmp = _deserializer.char(buffer);
    data.c = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [uint16]
    tmp = _deserializer.uint16(buffer);
    data.uint16 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [uint32]
    tmp = _deserializer.uint32(buffer);
    data.uint32 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [uint64]
    tmp = _deserializer.uint64(buffer);
    data.uint64 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [float32]
    tmp = _deserializer.float32(buffer);
    data.float32 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [float64]
    tmp = _deserializer.float64(buffer);
    data.float64 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [t]
    tmp = _deserializer.time(buffer);
    data.t = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [d]
    tmp = _deserializer.duration(buffer);
    data.d = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rosmaster/TestPrimitives';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '3e70f428a22c0d26ca67f87802c8e00f';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Integration test message of all primitive types
    
    # caller_id of most recent node to send this message
    string caller_id
    # caller_id of the original node to send this message
    string orig_caller_id
    
    string str
    byte b
    int16 int16
    int32 int32
    int64 int64
    char c
    uint16 uint16
    uint32 uint32
    uint64 uint64
    float32 float32
    float64 float64
    time t
    duration d
    
    
    `;
  }

};

module.exports = TestPrimitives;
