// Auto-generated. Do not edit!

// (in-package test_roslib_comm.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class FillSimple {
  constructor() {
    this.i32 = 0;
    this.str = '';
    this.i32_array = [];
    this.b = false;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type FillSimple
    // Serialize message field [i32]
    bufferInfo = _serializer.int32(obj.i32, bufferInfo);
    // Serialize message field [str]
    bufferInfo = _serializer.string(obj.str, bufferInfo);
    // Serialize the length for message field [i32_array]
    bufferInfo = _serializer.uint32(obj.i32_array.length, bufferInfo);
    // Serialize message field [i32_array]
    obj.i32_array.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    // Serialize message field [b]
    bufferInfo = _serializer.bool(obj.b, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type FillSimple
    let tmp;
    let len;
    let data = new FillSimple();
    // Deserialize message field [i32]
    tmp = _deserializer.int32(buffer);
    data.i32 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [str]
    tmp = _deserializer.string(buffer);
    data.str = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [i32_array]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [i32_array]
    data.i32_array = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int32(buffer);
      data.i32_array[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [b]
    tmp = _deserializer.bool(buffer);
    data.b = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_roslib_comm/FillSimple';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'da04a60d03fa22f7d301f9bd5f9a08ab';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 i32
    string str
    int32[] i32_array
    bool b
    `;
  }

};

module.exports = FillSimple;
