// Auto-generated. Do not edit!

// (in-package test_roscpp.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let FixedLength = require('./FixedLength.js');

//-----------------------------------------------------------

class ArrayOfFixedLength {
  constructor() {
    this.a = new Array(4).fill(new FixedLength());
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ArrayOfFixedLength
    // Serialize message field [a]
    obj.a.forEach((val) => {
      bufferInfo = FixedLength.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ArrayOfFixedLength
    let tmp;
    let len;
    let data = new ArrayOfFixedLength();
    len = 4;
    // Deserialize message field [a]
    for (let i = 0; i < len; ++i) {
      tmp = FixedLength.deserialize(buffer);
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
    return 'test_roscpp/ArrayOfFixedLength';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '770e15962592d1fbea70b6b820ba16d9';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # This comment has "quotes" in it
    FixedLength[4] a
    ================================================================================
    MSG: test_roscpp/FixedLength
    uint32 a
    float32 b
    
    `;
  }

};

module.exports = ArrayOfFixedLength;
