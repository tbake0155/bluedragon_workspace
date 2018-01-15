// Auto-generated. Do not edit!

// (in-package test_roscpp.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let FixedLength = require('./FixedLength.js');

//-----------------------------------------------------------

class EmbeddedFixedLength {
  constructor() {
    this.a = new FixedLength();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type EmbeddedFixedLength
    // Serialize message field [a]
    bufferInfo = FixedLength.serialize(obj.a, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type EmbeddedFixedLength
    let tmp;
    let len;
    let data = new EmbeddedFixedLength();
    // Deserialize message field [a]
    tmp = FixedLength.deserialize(buffer);
    data.a = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_roscpp/EmbeddedFixedLength';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '770e15962592d1fbea70b6b820ba16d9';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    FixedLength a
    
    ================================================================================
    MSG: test_roscpp/FixedLength
    uint32 a
    float32 b
    
    `;
  }

};

module.exports = EmbeddedFixedLength;
