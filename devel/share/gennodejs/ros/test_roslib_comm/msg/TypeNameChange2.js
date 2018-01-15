// Auto-generated. Do not edit!

// (in-package test_roslib_comm.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let SameSubMsg2 = require('./SameSubMsg2.js');

//-----------------------------------------------------------

class TypeNameChange2 {
  constructor() {
    this.a = new SameSubMsg2();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TypeNameChange2
    // Serialize message field [a]
    bufferInfo = SameSubMsg2.serialize(obj.a, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TypeNameChange2
    let tmp;
    let len;
    let data = new TypeNameChange2();
    // Deserialize message field [a]
    tmp = SameSubMsg2.deserialize(buffer);
    data.a = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_roslib_comm/TypeNameChange2';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '31a9992534c4d020bfc4045e7dc1a786';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    SameSubMsg2 a
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

module.exports = TypeNameChange2;
