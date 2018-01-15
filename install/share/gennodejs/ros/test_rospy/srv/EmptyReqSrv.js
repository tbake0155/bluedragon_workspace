// Auto-generated. Do not edit!

// (in-package test_rospy.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class EmptyReqSrvRequest {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type EmptyReqSrvRequest
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type EmptyReqSrvRequest
    let tmp;
    let len;
    let data = new EmptyReqSrvRequest();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'test_rospy/EmptyReqSrvRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd41d8cd98f00b204e9800998ecf8427e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    `;
  }

};

class EmptyReqSrvResponse {
  constructor() {
    this.fake_secret = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type EmptyReqSrvResponse
    // Serialize message field [fake_secret]
    bufferInfo = _serializer.int32(obj.fake_secret, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type EmptyReqSrvResponse
    let tmp;
    let len;
    let data = new EmptyReqSrvResponse();
    // Deserialize message field [fake_secret]
    tmp = _deserializer.int32(buffer);
    data.fake_secret = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'test_rospy/EmptyReqSrvResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '1280578cbe4073963a4321b9248d566e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 fake_secret
    
    
    `;
  }

};

module.exports = {
  Request: EmptyReqSrvRequest,
  Response: EmptyReqSrvResponse
};
