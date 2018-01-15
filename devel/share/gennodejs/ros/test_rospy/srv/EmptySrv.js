// Auto-generated. Do not edit!

// (in-package test_rospy.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class EmptySrvRequest {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type EmptySrvRequest
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type EmptySrvRequest
    let tmp;
    let len;
    let data = new EmptySrvRequest();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'test_rospy/EmptySrvRequest';
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

class EmptySrvResponse {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type EmptySrvResponse
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type EmptySrvResponse
    let tmp;
    let len;
    let data = new EmptySrvResponse();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'test_rospy/EmptySrvResponse';
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

module.exports = {
  Request: EmptySrvRequest,
  Response: EmptySrvResponse
};
