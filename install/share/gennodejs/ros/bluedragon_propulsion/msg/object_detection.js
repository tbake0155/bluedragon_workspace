// Auto-generated. Do not edit!

// (in-package bluedragon_propulsion.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class object_detection {
  constructor() {
    this.object_detection = new Array(6).fill(0);
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type object_detection
    // Serialize message field [object_detection]
    obj.object_detection.forEach((val) => {
      bufferInfo = _serializer.bool(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type object_detection
    let tmp;
    let len;
    let data = new object_detection();
    len = 6;
    // Deserialize message field [object_detection]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.bool(buffer);
      data.object_detection[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'bluedragon_propulsion/object_detection';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'f9da5b0bcdc242559cfa3d1d953b4db2';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    bool[6] object_detection
    
    `;
  }

};

module.exports = object_detection;
