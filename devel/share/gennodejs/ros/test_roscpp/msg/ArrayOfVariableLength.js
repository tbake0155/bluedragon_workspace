// Auto-generated. Do not edit!

// (in-package test_roscpp.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let VariableLength = require('./VariableLength.js');

//-----------------------------------------------------------

class ArrayOfVariableLength {
  constructor() {
    this.a = new Array(4).fill(new VariableLength());
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ArrayOfVariableLength
    // Serialize message field [a]
    obj.a.forEach((val) => {
      bufferInfo = VariableLength.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ArrayOfVariableLength
    let tmp;
    let len;
    let data = new ArrayOfVariableLength();
    len = 4;
    // Deserialize message field [a]
    for (let i = 0; i < len; ++i) {
      tmp = VariableLength.deserialize(buffer);
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
    return 'test_roscpp/ArrayOfVariableLength';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e7404d454a50b82c426a3a2c76fbcefd';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    VariableLength[4] a
    ================================================================================
    MSG: test_roscpp/VariableLength
    uint32[] a
    
    `;
  }

};

module.exports = ArrayOfVariableLength;
