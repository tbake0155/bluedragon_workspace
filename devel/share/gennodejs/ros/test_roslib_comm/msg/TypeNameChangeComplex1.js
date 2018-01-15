// Auto-generated. Do not edit!

// (in-package test_roslib_comm.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let SameSubMsg1 = require('./SameSubMsg1.js');
let SameSubMsg2 = require('./SameSubMsg2.js');

//-----------------------------------------------------------

class TypeNameChangeComplex1 {
  constructor() {
    this.a = [];
    this.b = new Array(10).fill(new SameSubMsg2());
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TypeNameChangeComplex1
    // Serialize the length for message field [a]
    bufferInfo = _serializer.uint32(obj.a.length, bufferInfo);
    // Serialize message field [a]
    obj.a.forEach((val) => {
      bufferInfo = SameSubMsg1.serialize(val, bufferInfo);
    });
    // Serialize message field [b]
    obj.b.forEach((val) => {
      bufferInfo = SameSubMsg2.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TypeNameChangeComplex1
    let tmp;
    let len;
    let data = new TypeNameChangeComplex1();
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
    len = 10;
    // Deserialize message field [b]
    for (let i = 0; i < len; ++i) {
      tmp = SameSubMsg2.deserialize(buffer);
      data.b[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_roslib_comm/TypeNameChangeComplex1';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a01688a0991b9d7d9facf6d94b993e93';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    SameSubMsg1[] a
    SameSubMsg2[10] b
    
    ================================================================================
    MSG: test_roslib_comm/SameSubMsg1
    int32 a
    float32 b
    string c
    uint64[10] d
    float64[] e
    ================================================================================
    MSG: test_roslib_comm/SameSubMsg2
    int32 a
    float32 b
    string c
    uint64[10] d
    float64[] e
    `;
  }

};

module.exports = TypeNameChangeComplex1;
