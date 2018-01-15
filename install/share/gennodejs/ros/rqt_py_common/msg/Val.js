// Auto-generated. Do not edit!

// (in-package rqt_py_common.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Val {
  constructor() {
    this.floats = new Array(5).fill(0);
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Val
    // Serialize message field [floats]
    obj.floats.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Val
    let tmp;
    let len;
    let data = new Val();
    len = 5;
    // Deserialize message field [floats]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.floats[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'rqt_py_common/Val';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '4ca05234743a5086bfd02946376b9ff6';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float64[5] floats
    
    `;
  }

};

module.exports = Val;
