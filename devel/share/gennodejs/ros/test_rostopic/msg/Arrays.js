// Auto-generated. Do not edit!

// (in-package test_rostopic.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Arrays {
  constructor() {
    this.int8_arr = [];
    this.uint8_arr = [];
    this.int32_arr = [];
    this.uint32_arr = [];
    this.string_arr = [];
    this.time_arr = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Arrays
    // Serialize the length for message field [int8_arr]
    bufferInfo = _serializer.uint32(obj.int8_arr.length, bufferInfo);
    // Serialize message field [int8_arr]
    obj.int8_arr.forEach((val) => {
      bufferInfo = _serializer.int8(val, bufferInfo);
    });
    // Serialize the length for message field [uint8_arr]
    bufferInfo = _serializer.uint32(obj.uint8_arr.length, bufferInfo);
    // Serialize message field [uint8_arr]
    bufferInfo.buffer.push(obj.uint8_arr);
    bufferInfo.length += obj.uint8_arr.length;
    // Serialize the length for message field [int32_arr]
    bufferInfo = _serializer.uint32(obj.int32_arr.length, bufferInfo);
    // Serialize message field [int32_arr]
    obj.int32_arr.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    // Serialize the length for message field [uint32_arr]
    bufferInfo = _serializer.uint32(obj.uint32_arr.length, bufferInfo);
    // Serialize message field [uint32_arr]
    obj.uint32_arr.forEach((val) => {
      bufferInfo = _serializer.uint32(val, bufferInfo);
    });
    // Serialize the length for message field [string_arr]
    bufferInfo = _serializer.uint32(obj.string_arr.length, bufferInfo);
    // Serialize message field [string_arr]
    obj.string_arr.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize the length for message field [time_arr]
    bufferInfo = _serializer.uint32(obj.time_arr.length, bufferInfo);
    // Serialize message field [time_arr]
    obj.time_arr.forEach((val) => {
      bufferInfo = _serializer.time(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Arrays
    let tmp;
    let len;
    let data = new Arrays();
    // Deserialize array length for message field [int8_arr]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [int8_arr]
    data.int8_arr = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int8(buffer);
      data.int8_arr[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [uint8_arr]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [uint8_arr]
    data.uint8_arr = buffer.slice(0, len);
    buffer =  buffer.slice(len);
    // Deserialize array length for message field [int32_arr]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [int32_arr]
    data.int32_arr = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int32(buffer);
      data.int32_arr[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [uint32_arr]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [uint32_arr]
    data.uint32_arr = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.uint32(buffer);
      data.uint32_arr[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [string_arr]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [string_arr]
    data.string_arr = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.string_arr[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [time_arr]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [time_arr]
    data.time_arr = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.time(buffer);
      data.time_arr[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rostopic/Arrays';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c5a1f18379b10bdd4df210944f6007a4';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    #for rostopic tests
    int8[] int8_arr
    uint8[] uint8_arr
    int32[] int32_arr
    uint32[] uint32_arr
    string[] string_arr
    time[] time_arr
    
    `;
  }

};

module.exports = Arrays;
