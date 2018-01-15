// Auto-generated. Do not edit!

// (in-package test_rosmaster.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class String {
  constructor() {
    this.data = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type String
    // Serialize message field [data]
    bufferInfo = _serializer.string(obj.data, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type String
    let tmp;
    let len;
    let data = new String();
    // Deserialize message field [data]
    tmp = _deserializer.string(buffer);
    data.data = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rosmaster/String';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '992ce8a1687cec8c8bd883ec73ca41d1';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Copy of std_msgs/String.msg to avoid having tests require a dependency on std_msgs.
    string data
    
    `;
  }

};

module.exports = String;
