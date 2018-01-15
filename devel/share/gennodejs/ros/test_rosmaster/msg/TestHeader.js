// Auto-generated. Do not edit!

// (in-package test_rosmaster.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class TestHeader {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.caller_id = '';
    this.orig_caller_id = '';
    this.auto_header = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TestHeader
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [caller_id]
    bufferInfo = _serializer.string(obj.caller_id, bufferInfo);
    // Serialize message field [orig_caller_id]
    bufferInfo = _serializer.string(obj.orig_caller_id, bufferInfo);
    // Serialize message field [auto_header]
    bufferInfo = _serializer.byte(obj.auto_header, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TestHeader
    let tmp;
    let len;
    let data = new TestHeader();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [caller_id]
    tmp = _deserializer.string(buffer);
    data.caller_id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [orig_caller_id]
    tmp = _deserializer.string(buffer);
    data.orig_caller_id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [auto_header]
    tmp = _deserializer.byte(buffer);
    data.auto_header = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rosmaster/TestHeader';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '4b5a00f536da2f756ba6aebcf795a967';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    
    # caller_id of most recent node to send this message
    string caller_id
    # caller_id of the original node to send this message
    string orig_caller_id
    
    byte auto_header # autoset header on response
    
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    # 0: no frame
    # 1: global frame
    string frame_id
    
    `;
  }

};

module.exports = TestHeader;
