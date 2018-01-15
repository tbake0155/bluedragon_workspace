// Auto-generated. Do not edit!

// (in-package test_rosbag.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let MigratedExplicit = require('./MigratedExplicit.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class MigratedImplicit {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.field4 = new MigratedExplicit();
    this.field3 = '';
    this.field2 = 0.0;
    this.field1 = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type MigratedImplicit
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [field4]
    bufferInfo = MigratedExplicit.serialize(obj.field4, bufferInfo);
    // Serialize message field [field3]
    bufferInfo = _serializer.string(obj.field3, bufferInfo);
    // Serialize message field [field2]
    bufferInfo = _serializer.float32(obj.field2, bufferInfo);
    // Serialize message field [field1]
    bufferInfo = _serializer.int32(obj.field1, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type MigratedImplicit
    let tmp;
    let len;
    let data = new MigratedImplicit();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [field4]
    tmp = MigratedExplicit.deserialize(buffer);
    data.field4 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [field3]
    tmp = _deserializer.string(buffer);
    data.field3 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [field2]
    tmp = _deserializer.float32(buffer);
    data.field2 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [field1]
    tmp = _deserializer.int32(buffer);
    data.field1 = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rosbag/MigratedImplicit';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '7b0df649c3321dd04be54792fdbbc874';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header  header
    MigratedExplicit field4 #(17, 58.2 "aldfkja", 82)
    string  field3 #"kljene"
    float32 field2 #16.32
    int32   field1 #34
    
    
    
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
    MSG: test_rosbag/MigratedExplicit
    Header  header
    float32 afield2 #58.2
    string  combo_field3 #"aldfkja 17"
    int32   afield4 #82
    `;
  }

};

module.exports = MigratedImplicit;
