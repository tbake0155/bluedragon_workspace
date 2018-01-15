// Auto-generated. Do not edit!

// (in-package test_roscpp.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class FixedLengthStringArray {
  constructor() {
    this.foo = new Array(5).fill(0);
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type FixedLengthStringArray
    // Serialize message field [foo]
    obj.foo.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type FixedLengthStringArray
    let tmp;
    let len;
    let data = new FixedLengthStringArray();
    len = 5;
    // Deserialize message field [foo]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.foo[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_roscpp/FixedLengthStringArray';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '8e291ac046196a95bbe34c1555b382cc';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string[5] foo
    
    `;
  }

};

module.exports = FixedLengthStringArray;
