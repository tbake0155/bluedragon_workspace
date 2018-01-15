// Auto-generated. Do not edit!

// (in-package test_rosmaster.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class RossrvARequest {
  constructor() {
    this.areq = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RossrvARequest
    // Serialize message field [areq]
    bufferInfo = _serializer.int32(obj.areq, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type RossrvARequest
    let tmp;
    let len;
    let data = new RossrvARequest();
    // Deserialize message field [areq]
    tmp = _deserializer.int32(buffer);
    data.areq = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'test_rosmaster/RossrvARequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '0217cf2f145df7686492b0471b5ecf7a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 areq
    
    `;
  }

};

class RossrvAResponse {
  constructor() {
    this.aresp = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RossrvAResponse
    // Serialize message field [aresp]
    bufferInfo = _serializer.int32(obj.aresp, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type RossrvAResponse
    let tmp;
    let len;
    let data = new RossrvAResponse();
    // Deserialize message field [aresp]
    tmp = _deserializer.int32(buffer);
    data.aresp = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'test_rosmaster/RossrvAResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '7714078796589731036f4da799e23357';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 aresp
    
    
    `;
  }

};

module.exports = {
  Request: RossrvARequest,
  Response: RossrvAResponse
};
