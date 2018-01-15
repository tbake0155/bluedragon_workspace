// Auto-generated. Do not edit!

// (in-package test_roscpp.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class ChannelFloat32 {
  constructor() {
    this.name = '';
    this.vals = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ChannelFloat32
    // Serialize message field [name]
    bufferInfo = _serializer.string(obj.name, bufferInfo);
    // Serialize the length for message field [vals]
    bufferInfo = _serializer.uint32(obj.vals.length, bufferInfo);
    // Serialize message field [vals]
    obj.vals.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ChannelFloat32
    let tmp;
    let len;
    let data = new ChannelFloat32();
    // Deserialize message field [name]
    tmp = _deserializer.string(buffer);
    data.name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [vals]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [vals]
    data.vals = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.vals[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_roscpp/ChannelFloat32';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '61c47e4621e471c885edb248b5dcafd5';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string name
    float32[] vals
    `;
  }

};

module.exports = ChannelFloat32;
