// Auto-generated. Do not edit!

// (in-package test_rospy.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class MultipleAddTwoIntsRequest {
  constructor() {
    this.a = 0;
    this.b = 0;
    this.c = 0;
    this.d = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type MultipleAddTwoIntsRequest
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
    //deserializes a message object of type MultipleAddTwoIntsRequest
    let tmp;
    let len;
    let data = new MultipleAddTwoIntsRequest();
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
    return 'test_rospy/MultipleAddTwoIntsRequest';
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

class MultipleAddTwoIntsResponse {
  constructor() {
    this.ab = 0;
    this.cd = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type MultipleAddTwoIntsResponse
    // Serialize message field [ab]
    bufferInfo = _serializer.int32(obj.ab, bufferInfo);
    // Serialize message field [cd]
    bufferInfo = _serializer.int32(obj.cd, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type MultipleAddTwoIntsResponse
    let tmp;
    let len;
    let data = new MultipleAddTwoIntsResponse();
    // Deserialize message field [ab]
    tmp = _deserializer.int32(buffer);
    data.ab = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [cd]
    tmp = _deserializer.int32(buffer);
    data.cd = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'test_rospy/MultipleAddTwoIntsResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e6fcb876df417a4130d2c7eb2d1b2436';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 ab
    int32 cd
    
    `;
  }

};

module.exports = {
  Request: MultipleAddTwoIntsRequest,
  Response: MultipleAddTwoIntsResponse
};
