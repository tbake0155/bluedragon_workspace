// Auto-generated. Do not edit!

// (in-package test_rosbag.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Simple = require('./Simple.js');

//-----------------------------------------------------------

class MigratedAddSub {
  constructor() {
    this.field1 = new Simple();
    this.field2 = new Simple();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type MigratedAddSub
    // Serialize message field [field1]
    bufferInfo = Simple.serialize(obj.field1, bufferInfo);
    // Serialize message field [field2]
    bufferInfo = Simple.serialize(obj.field2, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type MigratedAddSub
    let tmp;
    let len;
    let data = new MigratedAddSub();
    // Deserialize message field [field1]
    tmp = Simple.deserialize(buffer);
    data.field1 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [field2]
    tmp = Simple.deserialize(buffer);
    data.field2 = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rosbag/MigratedAddSub';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'f54ff3b9ba622359fa96ac15d4498153';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Simple field1
    Simple field2
    ================================================================================
    MSG: test_rosbag/Simple
    int32 field1 #42
    `;
  }

};

module.exports = MigratedAddSub;
