// Auto-generated. Do not edit!

// (in-package test_rosmaster.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class TVals {
  constructor() {
    this.t = {secs: 0, nsecs: 0};
    this.d = {secs: 0, nsecs: 0};
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TVals
    // Serialize message field [t]
    bufferInfo = _serializer.time(obj.t, bufferInfo);
    // Serialize message field [d]
    bufferInfo = _serializer.duration(obj.d, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TVals
    let tmp;
    let len;
    let data = new TVals();
    // Deserialize message field [t]
    tmp = _deserializer.time(buffer);
    data.t = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [d]
    tmp = _deserializer.duration(buffer);
    data.d = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rosmaster/TVals';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ae4d4f9600b9ab683a5dc9372c031758';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # for rostopic tests
    time t
    duration d
    
    `;
  }

};

module.exports = TVals;
