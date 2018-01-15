// Auto-generated. Do not edit!

// (in-package test_rospy.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Val = require('../msg/Val.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------


//-----------------------------------------------------------

class StringStringRequest {
  constructor() {
    this.str = new std_msgs.msg.String();
    this.str2 = new Val();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type StringStringRequest
    // Serialize message field [str]
    bufferInfo = std_msgs.msg.String.serialize(obj.str, bufferInfo);
    // Serialize message field [str2]
    bufferInfo = Val.serialize(obj.str2, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type StringStringRequest
    let tmp;
    let len;
    let data = new StringStringRequest();
    // Deserialize message field [str]
    tmp = std_msgs.msg.String.deserialize(buffer);
    data.str = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [str2]
    tmp = Val.deserialize(buffer);
    data.str2 = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'test_rospy/StringStringRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '1546156fedebbd48201e9764f27ae3e2';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    std_msgs/String str
    Val str2
    
    ================================================================================
    MSG: std_msgs/String
    string data
    
    ================================================================================
    MSG: test_rospy/Val
    string val
    `;
  }

};

class StringStringResponse {
  constructor() {
    this.str = new std_msgs.msg.String();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type StringStringResponse
    // Serialize message field [str]
    bufferInfo = std_msgs.msg.String.serialize(obj.str, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type StringStringResponse
    let tmp;
    let len;
    let data = new StringStringResponse();
    // Deserialize message field [str]
    tmp = std_msgs.msg.String.deserialize(buffer);
    data.str = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'test_rospy/StringStringResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '32224c1636e75e68745b61629dfa07c5';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    std_msgs/String str
    
    
    ================================================================================
    MSG: std_msgs/String
    string data
    
    `;
  }

};

module.exports = {
  Request: StringStringRequest,
  Response: StringStringResponse
};
