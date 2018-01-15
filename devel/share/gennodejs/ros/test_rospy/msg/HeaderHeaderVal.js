// Auto-generated. Do not edit!

// (in-package test_rospy.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let HeaderVal = require('./HeaderVal.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class HeaderHeaderVal {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.val = new HeaderVal();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type HeaderHeaderVal
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [val]
    bufferInfo = HeaderVal.serialize(obj.val, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type HeaderHeaderVal
    let tmp;
    let len;
    let data = new HeaderHeaderVal();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [val]
    tmp = HeaderVal.deserialize(buffer);
    data.val = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rospy/HeaderHeaderVal';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ae71c365b9bafbc4abaf37150c80a6b5';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    HeaderVal val
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
    
    ================================================================================
    MSG: test_rospy/HeaderVal
    Header header
    string val
    `;
  }

};

module.exports = HeaderHeaderVal;
