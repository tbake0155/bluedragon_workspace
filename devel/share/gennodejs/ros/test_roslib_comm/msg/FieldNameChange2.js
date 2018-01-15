// Auto-generated. Do not edit!

// (in-package test_roslib_comm.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let SameSubMsg1 = require('./SameSubMsg1.js');

//-----------------------------------------------------------

class FieldNameChange2 {
  constructor() {
    this.b = new SameSubMsg1();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type FieldNameChange2
    // Serialize message field [b]
    bufferInfo = SameSubMsg1.serialize(obj.b, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type FieldNameChange2
    let tmp;
    let len;
    let data = new FieldNameChange2();
    // Deserialize message field [b]
    tmp = SameSubMsg1.deserialize(buffer);
    data.b = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_roslib_comm/FieldNameChange2';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'dde34a89b93706fc183fd13c24ae090a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    SameSubMsg1 b
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

module.exports = FieldNameChange2;
