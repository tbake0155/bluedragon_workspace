// Auto-generated. Do not edit!

// (in-package test_roscpp.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class WithDuration {
  constructor() {
    this.my_duration = {secs: 0, nsecs: 0};
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type WithDuration
    // Serialize message field [my_duration]
    bufferInfo = _serializer.duration(obj.my_duration, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type WithDuration
    let tmp;
    let len;
    let data = new WithDuration();
    // Deserialize message field [my_duration]
    tmp = _deserializer.duration(buffer);
    data.my_duration = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_roscpp/WithDuration';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '7ad52ba9d0229ba8b9c032400c77c367';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    duration my_duration
    `;
  }

};

module.exports = WithDuration;
