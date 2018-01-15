// Auto-generated. Do not edit!

// (in-package test_roscpp.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class BadTestStringStringRequest {
  constructor() {
    this.strbad = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type BadTestStringStringRequest
    // Serialize message field [strbad]
    bufferInfo = _serializer.string(obj.strbad, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type BadTestStringStringRequest
    let tmp;
    let len;
    let data = new BadTestStringStringRequest();
    // Deserialize message field [strbad]
    tmp = _deserializer.string(buffer);
    data.strbad = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'test_roscpp/BadTestStringStringRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '0eb2dbe383c40e9fd573702d3024aa21';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    string strbad
    
    `;
  }

};

class BadTestStringStringResponse {
  constructor() {
    this.str = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type BadTestStringStringResponse
    // Serialize message field [str]
    bufferInfo = _serializer.string(obj.str, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type BadTestStringStringResponse
    let tmp;
    let len;
    let data = new BadTestStringStringResponse();
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
    return 'test_roscpp/BadTestStringStringResponse';
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
  Request: BadTestStringStringRequest,
  Response: BadTestStringStringResponse
};
