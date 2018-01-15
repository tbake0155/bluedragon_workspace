// Auto-generated. Do not edit!

// (in-package driver_base.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class ConfigString {
  constructor() {
    this.name = '';
    this.value = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ConfigString
    // Serialize message field [name]
    bufferInfo = _serializer.string(obj.name, bufferInfo);
    // Serialize message field [value]
    bufferInfo = _serializer.string(obj.value, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ConfigString
    let tmp;
    let len;
    let data = new ConfigString();
    // Deserialize message field [name]
    tmp = _deserializer.string(buffer);
    data.name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [value]
    tmp = _deserializer.string(buffer);
    data.value = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'driver_base/ConfigString';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'bc6ccc4a57f61779c8eaae61e9f422e0';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string name
    string value
    
    `;
  }

};

module.exports = ConfigString;
