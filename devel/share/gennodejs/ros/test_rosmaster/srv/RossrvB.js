// Auto-generated. Do not edit!

// (in-package test_rosmaster.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Empty = require('../msg/Empty.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class RossrvBRequest {
  constructor() {
    this.empty = new Empty();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RossrvBRequest
    // Serialize message field [empty]
    bufferInfo = Empty.serialize(obj.empty, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type RossrvBRequest
    let tmp;
    let len;
    let data = new RossrvBRequest();
    // Deserialize message field [empty]
    tmp = Empty.deserialize(buffer);
    data.empty = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'test_rosmaster/RossrvBRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '6aac6c697d5414bc0fcede8c33981d0e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Empty empty
    
    ================================================================================
    MSG: test_rosmaster/Empty
    
    `;
  }

};

class RossrvBResponse {
  constructor() {
    this.empty = new Empty();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RossrvBResponse
    // Serialize message field [empty]
    bufferInfo = Empty.serialize(obj.empty, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type RossrvBResponse
    let tmp;
    let len;
    let data = new RossrvBResponse();
    // Deserialize message field [empty]
    tmp = Empty.deserialize(buffer);
    data.empty = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'test_rosmaster/RossrvBResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '6aac6c697d5414bc0fcede8c33981d0e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Empty empty
    
    
    ================================================================================
    MSG: test_rosmaster/Empty
    
    `;
  }

};

module.exports = {
  Request: RossrvBRequest,
  Response: RossrvBResponse
};
