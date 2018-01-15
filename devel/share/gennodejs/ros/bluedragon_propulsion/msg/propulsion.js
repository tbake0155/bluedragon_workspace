// Auto-generated. Do not edit!

// (in-package bluedragon_propulsion.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class propulsion {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.left_throttle = 0;
    this.right_throttle = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type propulsion
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [left_throttle]
    bufferInfo = _serializer.int64(obj.left_throttle, bufferInfo);
    // Serialize message field [right_throttle]
    bufferInfo = _serializer.int64(obj.right_throttle, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type propulsion
    let tmp;
    let len;
    let data = new propulsion();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [left_throttle]
    tmp = _deserializer.int64(buffer);
    data.left_throttle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [right_throttle]
    tmp = _deserializer.int64(buffer);
    data.right_throttle = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'bluedragon_propulsion/propulsion';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a774e17636e326c8db038b535586c623';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    
    int64 left_throttle
    int64 right_throttle
    
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

module.exports = propulsion;
