// Auto-generated. Do not edit!

// (in-package test_rosbag.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Unmigrated = require('./Unmigrated.js');

//-----------------------------------------------------------

class SubUnmigrated {
  constructor() {
    this.field1 = 0;
    this.field2 = new Unmigrated();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SubUnmigrated
    // Serialize message field [field1]
    bufferInfo = _serializer.int32(obj.field1, bufferInfo);
    // Serialize message field [field2]
    bufferInfo = Unmigrated.serialize(obj.field2, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SubUnmigrated
    let tmp;
    let len;
    let data = new SubUnmigrated();
    // Deserialize message field [field1]
    tmp = _deserializer.int32(buffer);
    data.field1 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [field2]
    tmp = Unmigrated.deserialize(buffer);
    data.field2 = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rosbag/SubUnmigrated';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'f5b2916c606d6720ed1e99762dae845f';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32      field1 # 92
    Unmigrated field2 # (12, "uuiasjs", 61.7)
    
    ================================================================================
    MSG: test_rosbag/Unmigrated
    int32   field1 #12
    string  field2 #"uuiasjs"
    float32 field3 #61.7
    `;
  }

};

module.exports = SubUnmigrated;
