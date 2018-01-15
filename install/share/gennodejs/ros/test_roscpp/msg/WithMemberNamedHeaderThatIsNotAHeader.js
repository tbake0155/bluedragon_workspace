// Auto-generated. Do not edit!

// (in-package test_roscpp.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let CustomHeader = require('./CustomHeader.js');

//-----------------------------------------------------------

class WithMemberNamedHeaderThatIsNotAHeader {
  constructor() {
    this.header = new CustomHeader();
    this.a = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type WithMemberNamedHeaderThatIsNotAHeader
    // Serialize message field [header]
    bufferInfo = CustomHeader.serialize(obj.header, bufferInfo);
    // Serialize message field [a]
    bufferInfo = _serializer.uint32(obj.a, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type WithMemberNamedHeaderThatIsNotAHeader
    let tmp;
    let len;
    let data = new WithMemberNamedHeaderThatIsNotAHeader();
    // Deserialize message field [header]
    tmp = CustomHeader.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [a]
    tmp = _deserializer.uint32(buffer);
    data.a = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_roscpp/WithMemberNamedHeaderThatIsNotAHeader';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '59a71bc6c7b0e5643fa9d213cdf4c63c';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    CustomHeader header
    uint32 a
    ================================================================================
    MSG: test_roscpp/CustomHeader
    uint32 a
    
    `;
  }

};

module.exports = WithMemberNamedHeaderThatIsNotAHeader;
