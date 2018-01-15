// Auto-generated. Do not edit!

// (in-package test_roscpp.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let rosgraph_msgs = _finder('rosgraph_msgs');

//-----------------------------------------------------------

class VariableLengthArrayOfExternal {
  constructor() {
    this.a = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type VariableLengthArrayOfExternal
    // Serialize the length for message field [a]
    bufferInfo = _serializer.uint32(obj.a.length, bufferInfo);
    // Serialize message field [a]
    obj.a.forEach((val) => {
      bufferInfo = rosgraph_msgs.msg.Log.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type VariableLengthArrayOfExternal
    let tmp;
    let len;
    let data = new VariableLengthArrayOfExternal();
    // Deserialize array length for message field [a]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [a]
    data.a = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = rosgraph_msgs.msg.Log.deserialize(buffer);
      data.a[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_roscpp/VariableLengthArrayOfExternal';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'cc431047757f431ecd2754e03aa592f8';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # This comment has "quotes" in it
    rosgraph_msgs/Log[] a
    ================================================================================
    MSG: rosgraph_msgs/Log
    ##
    ## Severity level constants
    ##
    byte DEBUG=1 #debug level
    byte INFO=2  #general level
    byte WARN=4  #warning level
    byte ERROR=8 #error level
    byte FATAL=16 #fatal/critical level
    ##
    ## Fields
    ##
    Header header
    byte level
    string name # name of the node
    string msg # message 
    string file # file the message came from
    string function # function the message came from
    uint32 line # line the message came from
    string[] topics # topic names that the node publishes
    
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

module.exports = VariableLengthArrayOfExternal;
