// Auto-generated. Do not edit!

// (in-package test_rospy.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class ListReturnRequest {
  constructor() {
    this.a = 0;
    this.b = 0;
    this.c = 0;
    this.d = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ListReturnRequest
    // Serialize message field [a]
    bufferInfo = _serializer.int32(obj.a, bufferInfo);
    // Serialize message field [b]
    bufferInfo = _serializer.int32(obj.b, bufferInfo);
    // Serialize message field [c]
    bufferInfo = _serializer.int32(obj.c, bufferInfo);
    // Serialize message field [d]
    bufferInfo = _serializer.int32(obj.d, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ListReturnRequest
    let tmp;
    let len;
    let data = new ListReturnRequest();
    // Deserialize message field [a]
    tmp = _deserializer.int32(buffer);
    data.a = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [b]
    tmp = _deserializer.int32(buffer);
    data.b = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [c]
    tmp = _deserializer.int32(buffer);
    data.c = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [d]
    tmp = _deserializer.int32(buffer);
    data.d = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'test_rospy/ListReturnRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '55328e64986cccd71be7fe834e693c76';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    int32 a
    int32 b
    int32 c
    int32 d
    
    `;
  }

};

class ListReturnResponse {
  constructor() {
    this.abcd = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ListReturnResponse
    // Serialize the length for message field [abcd]
    bufferInfo = _serializer.uint32(obj.abcd.length, bufferInfo);
    // Serialize message field [abcd]
    obj.abcd.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ListReturnResponse
    let tmp;
    let len;
    let data = new ListReturnResponse();
    // Deserialize array length for message field [abcd]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [abcd]
    data.abcd = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int32(buffer);
      data.abcd[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'test_rospy/ListReturnResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'f962153177b365e43b03cfe90160f33e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32[] abcd
    
    
    `;
  }

};

module.exports = {
  Request: ListReturnRequest,
  Response: ListReturnResponse
};
