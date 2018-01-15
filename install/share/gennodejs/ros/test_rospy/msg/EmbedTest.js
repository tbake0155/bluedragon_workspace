// Auto-generated. Do not edit!

// (in-package test_rospy.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Val = require('./Val.js');
let ArrayVal = require('./ArrayVal.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class EmbedTest {
  constructor() {
    this.str1 = new std_msgs.msg.String();
    this.int1 = new std_msgs.msg.Int32();
    this.ints = [];
    this.val = new Val();
    this.vals = [];
    this.arrayval = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type EmbedTest
    // Serialize message field [str1]
    bufferInfo = std_msgs.msg.String.serialize(obj.str1, bufferInfo);
    // Serialize message field [int1]
    bufferInfo = std_msgs.msg.Int32.serialize(obj.int1, bufferInfo);
    // Serialize the length for message field [ints]
    bufferInfo = _serializer.uint32(obj.ints.length, bufferInfo);
    // Serialize message field [ints]
    obj.ints.forEach((val) => {
      bufferInfo = std_msgs.msg.Int32.serialize(val, bufferInfo);
    });
    // Serialize message field [val]
    bufferInfo = Val.serialize(obj.val, bufferInfo);
    // Serialize the length for message field [vals]
    bufferInfo = _serializer.uint32(obj.vals.length, bufferInfo);
    // Serialize message field [vals]
    obj.vals.forEach((val) => {
      bufferInfo = Val.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [arrayval]
    bufferInfo = _serializer.uint32(obj.arrayval.length, bufferInfo);
    // Serialize message field [arrayval]
    obj.arrayval.forEach((val) => {
      bufferInfo = ArrayVal.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type EmbedTest
    let tmp;
    let len;
    let data = new EmbedTest();
    // Deserialize message field [str1]
    tmp = std_msgs.msg.String.deserialize(buffer);
    data.str1 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [int1]
    tmp = std_msgs.msg.Int32.deserialize(buffer);
    data.int1 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [ints]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ints]
    data.ints = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = std_msgs.msg.Int32.deserialize(buffer);
      data.ints[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [val]
    tmp = Val.deserialize(buffer);
    data.val = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [vals]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [vals]
    data.vals = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Val.deserialize(buffer);
      data.vals[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [arrayval]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [arrayval]
    data.arrayval = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = ArrayVal.deserialize(buffer);
      data.arrayval[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rospy/EmbedTest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'f8b1fc6a0f70f541c9d6bd2886b9e249';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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

module.exports = EmbedTest;
