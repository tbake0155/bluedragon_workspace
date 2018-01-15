// Auto-generated. Do not edit!

// (in-package test_roslib_comm.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class FillEmbedTime {
  constructor() {
    this.t = {secs: 0, nsecs: 0};
    this.d = {secs: 0, nsecs: 0};
    this.str_msg = new std_msgs.msg.String();
    this.str_msg_array = [];
    this.i32 = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type FillEmbedTime
    // Serialize message field [t]
    bufferInfo = _serializer.time(obj.t, bufferInfo);
    // Serialize message field [d]
    bufferInfo = _serializer.duration(obj.d, bufferInfo);
    // Serialize message field [str_msg]
    bufferInfo = std_msgs.msg.String.serialize(obj.str_msg, bufferInfo);
    // Serialize the length for message field [str_msg_array]
    bufferInfo = _serializer.uint32(obj.str_msg_array.length, bufferInfo);
    // Serialize message field [str_msg_array]
    obj.str_msg_array.forEach((val) => {
      bufferInfo = std_msgs.msg.String.serialize(val, bufferInfo);
    });
    // Serialize message field [i32]
    bufferInfo = _serializer.int32(obj.i32, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type FillEmbedTime
    let tmp;
    let len;
    let data = new FillEmbedTime();
    // Deserialize message field [t]
    tmp = _deserializer.time(buffer);
    data.t = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [d]
    tmp = _deserializer.duration(buffer);
    data.d = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [str_msg]
    tmp = std_msgs.msg.String.deserialize(buffer);
    data.str_msg = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [str_msg_array]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [str_msg_array]
    data.str_msg_array = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = std_msgs.msg.String.deserialize(buffer);
      data.str_msg_array[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [i32]
    tmp = _deserializer.int32(buffer);
    data.i32 = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_roslib_comm/FillEmbedTime';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '90e08039be001a899b8c20e680c289b0';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    time t
    duration d
    std_msgs/String str_msg
    std_msgs/String[] str_msg_array
    int32 i32
    ================================================================================
    MSG: std_msgs/String
    string data
    
    `;
  }

};

module.exports = FillEmbedTime;
