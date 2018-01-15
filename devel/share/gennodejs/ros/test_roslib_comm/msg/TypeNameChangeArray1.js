// Auto-generated. Do not edit!

// (in-package test_roslib_comm.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let SameSubMsg1 = require('./SameSubMsg1.js');

//-----------------------------------------------------------

class TypeNameChangeArray1 {
  constructor() {
    this.a = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TypeNameChangeArray1
    // Serialize the length for message field [a]
    bufferInfo = _serializer.uint32(obj.a.length, bufferInfo);
    // Serialize message field [a]
    obj.a.forEach((val) => {
      bufferInfo = SameSubMsg1.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TypeNameChangeArray1
    let tmp;
    let len;
    let data = new TypeNameChangeArray1();
    // Deserialize array length for message field [a]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [a]
    data.a = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = SameSubMsg1.deserialize(buffer);
      data.a[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_roslib_comm/TypeNameChangeArray1';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '31a9992534c4d020bfc4045e7dc1a786';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    SameSubMsg1[] a
    ================================================================================
    MSG: test_roslib_comm/SameSubMsg1
    int32 a
    float32 b
    string c
    uint64[10] d
    float64[] e
    `;
  }

};

module.exports = TypeNameChangeArray1;
