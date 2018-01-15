// Auto-generated. Do not edit!

// (in-package test_rospy.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class PythonKeyword {
  constructor() {
    this.yield = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type PythonKeyword
    // Serialize message field [yield]
    bufferInfo = _serializer.int32(obj.yield, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type PythonKeyword
    let tmp;
    let len;
    let data = new PythonKeyword();
    // Deserialize message field [yield]
    tmp = _deserializer.int32(buffer);
    data.yield = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rospy/PythonKeyword';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '1330d6bbfad8e75334346fec949d5133';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 yield
    
    `;
  }

};

module.exports = PythonKeyword;
