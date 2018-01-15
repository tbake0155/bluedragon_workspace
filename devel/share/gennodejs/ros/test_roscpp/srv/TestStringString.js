// Auto-generated. Do not edit!

// (in-package test_roscpp.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class TestStringStringRequest {
  constructor() {
    this.str = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TestStringStringRequest
    // Serialize message field [str]
    bufferInfo = _serializer.string(obj.str, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TestStringStringRequest
    let tmp;
    let len;
    let data = new TestStringStringRequest();
    // Deserialize message field [str]
    tmp = _deserializer.string(buffer);
    data.str = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'test_roscpp/TestStringStringRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '994972b6e03928b2476860ce6c4c8e17';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string str
    
    `;
  }

};

class TestStringStringResponse {
  constructor() {
    this.str = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TestStringStringResponse
    // Serialize message field [str]
    bufferInfo = _serializer.string(obj.str, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TestStringStringResponse
    let tmp;
    let len;
    let data = new TestStringStringResponse();
    // Deserialize message field [str]
    tmp = _deserializer.string(buffer);
    data.str = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'test_roscpp/TestStringStringResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '994972b6e03928b2476860ce6c4c8e17';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string str
    
    
    `;
  }

};

module.exports = {
  Request: TestStringStringRequest,
  Response: TestStringStringResponse
};
