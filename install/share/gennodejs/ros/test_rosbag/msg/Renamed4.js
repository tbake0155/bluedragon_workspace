// Auto-generated. Do not edit!

// (in-package test_rosbag.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Renamed4 {
  constructor() {
    this.foo = 0.0;
    this.bar = new Array(4).fill(0);
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Renamed4
    // Serialize message field [foo]
    bufferInfo = _serializer.float64(obj.foo, bufferInfo);
    // Serialize message field [bar]
    obj.bar.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Renamed4
    let tmp;
    let len;
    let data = new Renamed4();
    // Deserialize message field [foo]
    tmp = _deserializer.float64(buffer);
    data.foo = tmp.data;
    buffer = tmp.buffer;
    len = 4;
    // Deserialize message field [bar]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int32(buffer);
      data.bar[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rosbag/Renamed4';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'dd19d6452bb5e45bb900f81fed30ae83';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float64  foo  # 2.17
    int32[4] bar  # [8, 2, 5, 1]
    `;
  }

};

module.exports = Renamed4;
