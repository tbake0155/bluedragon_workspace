// Auto-generated. Do not edit!

// (in-package test_rosbag.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let SimpleMigrated = require('./SimpleMigrated.js');

//-----------------------------------------------------------

class Converged {
  constructor() {
    this.field1 = new Array(4).fill(0);
    this.field2 = new Array(4).fill(new SimpleMigrated());
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Converged
    // Serialize message field [field1]
    obj.field1.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    // Serialize message field [field2]
    obj.field2.forEach((val) => {
      bufferInfo = SimpleMigrated.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Converged
    let tmp;
    let len;
    let data = new Converged();
    len = 4;
    // Deserialize message field [field1]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.field1[i] = tmp.data;
      buffer = tmp.buffer;
    }
    len = 4;
    // Deserialize message field [field2]
    for (let i = 0; i < len; ++i) {
      tmp = SimpleMigrated.deserialize(buffer);
      data.field2[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rosbag/Converged';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'fb364bc8a2a4b0b810763576f44bc36d';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float32[4]           field1 # [1.2, 3.4, 5.6, 7.8]
    SimpleMigrated[4]    field2 # [11, 22, 33, 44]
    ================================================================================
    MSG: test_rosbag/SimpleMigrated
    int32 data # 42
    `;
  }

};

module.exports = Converged;
