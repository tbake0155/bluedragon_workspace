// Auto-generated. Do not edit!

// (in-package test_roscpp.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class TestEmpty {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TestEmpty
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TestEmpty
    let tmp;
    let len;
    let data = new TestEmpty();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_roscpp/TestEmpty';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd41d8cd98f00b204e9800998ecf8427e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    `;
  }

};

module.exports = TestEmpty;
