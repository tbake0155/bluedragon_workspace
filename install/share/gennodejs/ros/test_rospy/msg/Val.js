// Auto-generated. Do not edit!

// (in-package test_rospy.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Val {
  constructor() {
    this.val = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Val
    // Serialize message field [val]
    bufferInfo = _serializer.string(obj.val, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Val
    let tmp;
    let len;
    let data = new Val();
    // Deserialize message field [val]
    tmp = _deserializer.string(buffer);
    data.val = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rospy/Val';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c45577ce53559408f0f69fe465be7c70';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string val
    `;
  }

};

module.exports = Val;
