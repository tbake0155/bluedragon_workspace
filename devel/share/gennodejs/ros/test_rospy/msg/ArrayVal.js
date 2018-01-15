// Auto-generated. Do not edit!

// (in-package test_rospy.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Val = require('./Val.js');

//-----------------------------------------------------------

class ArrayVal {
  constructor() {
    this.vals = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ArrayVal
    // Serialize the length for message field [vals]
    bufferInfo = _serializer.uint32(obj.vals.length, bufferInfo);
    // Serialize message field [vals]
    obj.vals.forEach((val) => {
      bufferInfo = Val.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ArrayVal
    let tmp;
    let len;
    let data = new ArrayVal();
    // Deserialize array length for message field [vals]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [vals]
    data.vals = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Val.deserialize(buffer);
      data.vals[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rospy/ArrayVal';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '94e095e6a59bceb3466e4b23c166732e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Val[] vals
    #Val[10] vals_fixed
    
    ================================================================================
    MSG: test_rospy/Val
    string val
    `;
  }

};

module.exports = ArrayVal;
