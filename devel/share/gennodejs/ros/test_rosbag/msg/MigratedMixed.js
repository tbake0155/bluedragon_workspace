// Auto-generated. Do not edit!

// (in-package test_rosbag.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let MigratedImplicit = require('./MigratedImplicit.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class MigratedMixed {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.field1 = new MigratedImplicit();
    this.field2 = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type MigratedMixed
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [field1]
    bufferInfo = MigratedImplicit.serialize(obj.field1, bufferInfo);
    // Serialize message field [field2]
    bufferInfo = _serializer.int32(obj.field2, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type MigratedMixed
    let tmp;
    let len;
    let data = new MigratedMixed();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [field1]
    tmp = MigratedImplicit.deserialize(buffer);
    data.field1 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [field2]
    tmp = _deserializer.int32(buffer);
    data.field2 = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rosbag/MigratedMixed';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '18a7d8e3c6a7e6f38daa85db9926ef07';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header             header
    MigratedImplicit   field1 #(34, 16.32, "kjljene", (17, 58.2, "aldfkja", 82))
    int32              field2 #59
    
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
    MSG: test_rosbag/MigratedImplicit
    Header  header
    MigratedExplicit field4 #(17, 58.2 "aldfkja", 82)
    string  field3 #"kljene"
    float32 field2 #16.32
    int32   field1 #34
    
    
    
    ================================================================================
    MSG: test_rosbag/MigratedExplicit
    Header  header
    float32 afield2 #58.2
    string  combo_field3 #"aldfkja 17"
    int32   afield4 #82
    `;
  }

};

module.exports = MigratedMixed;
