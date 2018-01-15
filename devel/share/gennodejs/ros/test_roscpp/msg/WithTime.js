// Auto-generated. Do not edit!

// (in-package test_roscpp.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class WithTime {
  constructor() {
    this.my_time = {secs: 0, nsecs: 0};
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type WithTime
    // Serialize message field [my_time]
    bufferInfo = _serializer.time(obj.my_time, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type WithTime
    let tmp;
    let len;
    let data = new WithTime();
    // Deserialize message field [my_time]
    tmp = _deserializer.time(buffer);
    data.my_time = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_roscpp/WithTime';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '60f189e40cfeaefbc79e6cdbd1605364';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    time my_time
    `;
  }

};

module.exports = WithTime;
