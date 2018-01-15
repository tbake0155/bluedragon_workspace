// Auto-generated. Do not edit!

// (in-package bluedragon_netcomm.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class flag {
  constructor() {
    this.user_flag = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type flag
    // Serialize message field [user_flag]
    bufferInfo = _serializer.uint8(obj.user_flag, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type flag
    let tmp;
    let len;
    let data = new flag();
    // Deserialize message field [user_flag]
    tmp = _deserializer.uint8(buffer);
    data.user_flag = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'bluedragon_netcomm/flag';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd78f593981d746c0e518fd7d6c60416a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    uint8 user_flag
    
    
    
    `;
  }

};

module.exports = flag;
