// Auto-generated. Do not edit!

// (in-package test_rospy.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let EmbedTest = require('./EmbedTest.js');

//-----------------------------------------------------------

class TransitiveImport {
  constructor() {
    this.data = new EmbedTest();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TransitiveImport
    // Serialize message field [data]
    bufferInfo = EmbedTest.serialize(obj.data, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TransitiveImport
    let tmp;
    let len;
    let data = new TransitiveImport();
    // Deserialize message field [data]
    tmp = EmbedTest.deserialize(buffer);
    data.data = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rospy/TransitiveImport';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '27665539bacd6d2d02a7538692d3d3d0';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Bug #2133/2139: EmbedTest uses std_msgs, so TransitiveImport needs it as well
    EmbedTest data
    ================================================================================
    MSG: test_rospy/EmbedTest
    std_msgs/String str1
    std_msgs/Int32 int1
    std_msgs/Int32[] ints
    Val val
    Val[] vals
    ArrayVal[] arrayval
    
    ================================================================================
    MSG: std_msgs/String
    string data
    
    ================================================================================
    MSG: std_msgs/Int32
    int32 data
    ================================================================================
    MSG: test_rospy/Val
    string val
    ================================================================================
    MSG: test_rospy/ArrayVal
    Val[] vals
    #Val[10] vals_fixed
    
    `;
  }

};

module.exports = TransitiveImport;
