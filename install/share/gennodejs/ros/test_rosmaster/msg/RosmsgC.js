// Auto-generated. Do not edit!

// (in-package test_rosmaster.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let String = require('./String.js');

//-----------------------------------------------------------

class RosmsgC {
  constructor() {
    this.s1 = new String();
    this.s2 = new String();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RosmsgC
    // Serialize message field [s1]
    bufferInfo = String.serialize(obj.s1, bufferInfo);
    // Serialize message field [s2]
    bufferInfo = String.serialize(obj.s2, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type RosmsgC
    let tmp;
    let len;
    let data = new RosmsgC();
    // Deserialize message field [s1]
    tmp = String.deserialize(buffer);
    data.s1 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [s2]
    tmp = String.deserialize(buffer);
    data.s2 = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rosmaster/RosmsgC';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'cc91a7e3c1498150f3554cbcab2800d2';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    String s1
    String s2
    
    ================================================================================
    MSG: test_rosmaster/String
    # Copy of std_msgs/String.msg to avoid having tests require a dependency on std_msgs.
    string data
    
    `;
  }

};

module.exports = RosmsgC;
