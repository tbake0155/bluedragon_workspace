// Auto-generated. Do not edit!

// (in-package test_rosmaster.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Simple {
  constructor() {
    this.b = 0;
    this.int16 = 0;
    this.int32 = 0;
    this.int64 = 0;
    this.c = 0;
    this.uint16 = 0;
    this.uint32 = 0;
    this.uint64 = 0;
    this.str = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Simple
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
    // Serialize message field [str]
    bufferInfo = _serializer.string(obj.str, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Simple
    let tmp;
    let len;
    let data = new Simple();
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
    // Deserialize message field [str]
    tmp = _deserializer.string(buffer);
    data.str = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rosmaster/Simple';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c9940b1313e61fed87cd22c50742578f';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # for rostopic tests
    byte b
    int16 int16
    int32 int32
    int64 int64
    char c
    uint16 uint16
    uint32 uint32
    uint64 uint64
    string str
    
    `;
  }

};

module.exports = Simple;
