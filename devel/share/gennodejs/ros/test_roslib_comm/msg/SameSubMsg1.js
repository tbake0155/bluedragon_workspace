// Auto-generated. Do not edit!

// (in-package test_roslib_comm.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class SameSubMsg1 {
  constructor() {
    this.a = 0;
    this.b = 0.0;
    this.c = '';
    this.d = new Array(10).fill(0);
    this.e = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SameSubMsg1
    // Serialize message field [a]
    bufferInfo = _serializer.int32(obj.a, bufferInfo);
    // Serialize message field [b]
    bufferInfo = _serializer.float32(obj.b, bufferInfo);
    // Serialize message field [c]
    bufferInfo = _serializer.string(obj.c, bufferInfo);
    // Serialize message field [d]
    obj.d.forEach((val) => {
      bufferInfo = _serializer.uint64(val, bufferInfo);
    });
    // Serialize the length for message field [e]
    bufferInfo = _serializer.uint32(obj.e.length, bufferInfo);
    // Serialize message field [e]
    obj.e.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SameSubMsg1
    let tmp;
    let len;
    let data = new SameSubMsg1();
    // Deserialize message field [a]
    tmp = _deserializer.int32(buffer);
    data.a = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [b]
    tmp = _deserializer.float32(buffer);
    data.b = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [c]
    tmp = _deserializer.string(buffer);
    data.c = tmp.data;
    buffer = tmp.buffer;
    len = 10;
    // Deserialize message field [d]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.uint64(buffer);
      data.d[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [e]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [e]
    data.e = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.e[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_roslib_comm/SameSubMsg1';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '49145a54e4be1a218629e518575a0bf3';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 a
    float32 b
    string c
    uint64[10] d
    float64[] e
    `;
  }

};

module.exports = SameSubMsg1;
