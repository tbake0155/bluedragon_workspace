// Auto-generated. Do not edit!

// (in-package test_roscpp.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class ThroughputMessage {
  constructor() {
    this.array = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ThroughputMessage
    // Serialize the length for message field [array]
    bufferInfo = _serializer.uint32(obj.array.length, bufferInfo);
    // Serialize message field [array]
    bufferInfo.buffer.push(obj.array);
    bufferInfo.length += obj.array.length;
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ThroughputMessage
    let tmp;
    let len;
    let data = new ThroughputMessage();
    // Deserialize array length for message field [array]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [array]
    data.array = buffer.slice(0, len);
    buffer =  buffer.slice(len);
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_roscpp/ThroughputMessage';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'dda33390139e301b6c212139192418ca';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    uint8[] array
    
    
    `;
  }

};

module.exports = ThroughputMessage;
