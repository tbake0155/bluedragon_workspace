// Auto-generated. Do not edit!

// (in-package test_roslib_comm.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let SameSubMsg1 = require('./SameSubMsg1.js');

//-----------------------------------------------------------

class FieldNameChange1 {
  constructor() {
    this.a = new SameSubMsg1();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type FieldNameChange1
    // Serialize message field [a]
    bufferInfo = SameSubMsg1.serialize(obj.a, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type FieldNameChange1
    let tmp;
    let len;
    let data = new FieldNameChange1();
    // Deserialize message field [a]
    tmp = SameSubMsg1.deserialize(buffer);
    data.a = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_roslib_comm/FieldNameChange1';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '31a9992534c4d020bfc4045e7dc1a786';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    SameSubMsg1 a
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

module.exports = FieldNameChange1;
