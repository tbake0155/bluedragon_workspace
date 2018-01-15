// Auto-generated. Do not edit!

// (in-package rqt_py_common.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Val = require('./Val.js');

//-----------------------------------------------------------

class ArrayVal {
  constructor() {
    this.vals = new Array(5).fill(new Val());
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ArrayVal
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
    len = 5;
    // Deserialize message field [vals]
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
    return 'rqt_py_common/ArrayVal';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e8748d44f2f20aabca0c342b053289ff';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Val[5] vals
    
    ================================================================================
    MSG: rqt_py_common/Val
    float64[5] floats
    
    `;
  }

};

module.exports = ArrayVal;
