// Auto-generated. Do not edit!

// (in-package test_roscpp.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class VariableLength {
  constructor() {
    this.a = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type VariableLength
    // Serialize the length for message field [a]
    bufferInfo = _serializer.uint32(obj.a.length, bufferInfo);
    // Serialize message field [a]
    obj.a.forEach((val) => {
      bufferInfo = _serializer.uint32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type VariableLength
    let tmp;
    let len;
    let data = new VariableLength();
    // Deserialize array length for message field [a]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [a]
    data.a = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.uint32(buffer);
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
    return 'test_roscpp/VariableLength';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd9a532f93b9aeffe09e3bc21ff3de0f0';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    uint32[] a
    
    `;
  }

};

module.exports = VariableLength;
