// Auto-generated. Do not edit!

// (in-package test_roscpp.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class HeaderNotFirstMember {
  constructor() {
    this.foo = 0;
    this.header = new std_msgs.msg.Header();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type HeaderNotFirstMember
    // Serialize message field [foo]
    bufferInfo = _serializer.int8(obj.foo, bufferInfo);
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type HeaderNotFirstMember
    let tmp;
    let len;
    let data = new HeaderNotFirstMember();
    // Deserialize message field [foo]
    tmp = _deserializer.int8(buffer);
    data.foo = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_roscpp/HeaderNotFirstMember';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c7ed781820d7a36c5947d0f441f50964';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int8 foo
    Header header
    
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

module.exports = HeaderNotFirstMember;
