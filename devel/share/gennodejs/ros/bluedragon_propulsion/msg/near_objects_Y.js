// Auto-generated. Do not edit!

// (in-package bluedragon_propulsion.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class near_objects_Y {
  constructor() {
    this.Y_objects = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type near_objects_Y
    // Serialize the length for message field [Y_objects]
    bufferInfo = _serializer.uint32(obj.Y_objects.length, bufferInfo);
    // Serialize message field [Y_objects]
    obj.Y_objects.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type near_objects_Y
    let tmp;
    let len;
    let data = new near_objects_Y();
    // Deserialize array length for message field [Y_objects]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [Y_objects]
    data.Y_objects = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.Y_objects[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'bluedragon_propulsion/near_objects_Y';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '5ebdc4270ce0a25ba89d453ef40152f9';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float64[] Y_objects 
    
    `;
  }

};

module.exports = near_objects_Y;
