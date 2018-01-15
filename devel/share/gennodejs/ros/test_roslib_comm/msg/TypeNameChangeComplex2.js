// Auto-generated. Do not edit!

// (in-package test_roslib_comm.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let SameSubMsg2 = require('./SameSubMsg2.js');
let SameSubMsg3 = require('./SameSubMsg3.js');

//-----------------------------------------------------------

class TypeNameChangeComplex2 {
  constructor() {
    this.a = [];
    this.b = new Array(10).fill(new SameSubMsg3());
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TypeNameChangeComplex2
    // Serialize the length for message field [a]
    bufferInfo = _serializer.uint32(obj.a.length, bufferInfo);
    // Serialize message field [a]
    obj.a.forEach((val) => {
      bufferInfo = SameSubMsg2.serialize(val, bufferInfo);
    });
    // Serialize message field [b]
    obj.b.forEach((val) => {
      bufferInfo = SameSubMsg3.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TypeNameChangeComplex2
    let tmp;
    let len;
    let data = new TypeNameChangeComplex2();
    // Deserialize array length for message field [a]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [a]
    data.a = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = SameSubMsg2.deserialize(buffer);
      data.a[i] = tmp.data;
      buffer = tmp.buffer;
    }
    len = 10;
    // Deserialize message field [b]
    for (let i = 0; i < len; ++i) {
      tmp = SameSubMsg3.deserialize(buffer);
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
    return 'test_roslib_comm/TypeNameChangeComplex2';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a01688a0991b9d7d9facf6d94b993e93';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    SameSubMsg2[] a
    SameSubMsg3[10] b
    
    ================================================================================
    MSG: test_roslib_comm/SameSubMsg2
    int32 a
    float32 b
    string c
    uint64[10] d
    float64[] e
    ================================================================================
    MSG: test_roslib_comm/SameSubMsg3
    
    # Lots of comments
    int32 a  #And more comments
    float32 b
    string c
    # And also some white space
    
    
    uint64[10] d
     float64[] e
    
    
    `;
  }

};

module.exports = TypeNameChangeComplex2;
