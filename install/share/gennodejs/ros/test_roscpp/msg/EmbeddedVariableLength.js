// Auto-generated. Do not edit!

// (in-package test_roscpp.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let VariableLength = require('./VariableLength.js');

//-----------------------------------------------------------

class EmbeddedVariableLength {
  constructor() {
    this.a = new VariableLength();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type EmbeddedVariableLength
    // Serialize message field [a]
    bufferInfo = VariableLength.serialize(obj.a, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type EmbeddedVariableLength
    let tmp;
    let len;
    let data = new EmbeddedVariableLength();
    // Deserialize message field [a]
    tmp = VariableLength.deserialize(buffer);
    data.a = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_roscpp/EmbeddedVariableLength';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e7404d454a50b82c426a3a2c76fbcefd';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    VariableLength a
    
    ================================================================================
    MSG: test_roscpp/VariableLength
    uint32[] a
    
    `;
  }

};

module.exports = EmbeddedVariableLength;
