// Auto-generated. Do not edit!

// (in-package bluedragon_propulsion.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class near_objects_X {
  constructor() {
    this.X_objects = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type near_objects_X
    // Serialize the length for message field [X_objects]
    bufferInfo = _serializer.uint32(obj.X_objects.length, bufferInfo);
    // Serialize message field [X_objects]
    obj.X_objects.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type near_objects_X
    let tmp;
    let len;
    let data = new near_objects_X();
    // Deserialize array length for message field [X_objects]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [X_objects]
    data.X_objects = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.X_objects[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'bluedragon_propulsion/near_objects_X';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '6f7a1b98aa7ff3484c531a329b3cf233';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float64[] X_objects 
    
    `;
  }

};

module.exports = near_objects_X;
