// Auto-generated. Do not edit!

// (in-package uuid_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class UniqueID {
  constructor() {
    this.uuid = new Array(16).fill(0);
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type UniqueID
    // Serialize message field [uuid]
    bufferInfo.buffer.push(obj.uuid);
    bufferInfo.length += obj.uuid.length;
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type UniqueID
    let tmp;
    let len;
    let data = new UniqueID();
    len = 16;
    // Deserialize message field [uuid]
    data.uuid = buffer.slice(0, len);
    buffer =  buffer.slice(len);
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'uuid_msgs/UniqueID';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'fec2a93b6f5367ee8112c9c0b41ff310';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # A universally unique identifier (UUID).
    #
    #  http://en.wikipedia.org/wiki/Universally_unique_identifier
    #  http://tools.ietf.org/html/rfc4122.html
    
    uint8[16] uuid
    
    `;
  }

};

module.exports = UniqueID;
