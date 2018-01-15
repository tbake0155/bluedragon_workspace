// Auto-generated. Do not edit!

// (in-package test_roscpp.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class VariableLengthStringArray {
  constructor() {
    this.foo = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type VariableLengthStringArray
    // Serialize the length for message field [foo]
    bufferInfo = _serializer.uint32(obj.foo.length, bufferInfo);
    // Serialize message field [foo]
    obj.foo.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type VariableLengthStringArray
    let tmp;
    let len;
    let data = new VariableLengthStringArray();
    // Deserialize array length for message field [foo]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [foo]
    data.foo = new Array(len);
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
    return 'test_roscpp/VariableLengthStringArray';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'fa992b5cca963995275d2a2f3ee7615f';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string[] foo
    
    `;
  }

};

module.exports = VariableLengthStringArray;
