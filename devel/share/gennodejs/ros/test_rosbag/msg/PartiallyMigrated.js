// Auto-generated. Do not edit!

// (in-package test_rosbag.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let MigratedExplicit = require('./MigratedExplicit.js');

//-----------------------------------------------------------

class PartiallyMigrated {
  constructor() {
    this.field1 = 0;
    this.field2 = new MigratedExplicit();
    this.field3 = '';
    this.field5 = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type PartiallyMigrated
    // Serialize message field [field1]
    bufferInfo = _serializer.int32(obj.field1, bufferInfo);
    // Serialize message field [field2]
    bufferInfo = MigratedExplicit.serialize(obj.field2, bufferInfo);
    // Serialize message field [field3]
    bufferInfo = _serializer.string(obj.field3, bufferInfo);
    // Serialize message field [field5]
    bufferInfo = _serializer.float32(obj.field5, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type PartiallyMigrated
    let tmp;
    let len;
    let data = new PartiallyMigrated();
    // Deserialize message field [field1]
    tmp = _deserializer.int32(buffer);
    data.field1 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [field2]
    tmp = MigratedExplicit.deserialize(buffer);
    data.field2 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [field3]
    tmp = _deserializer.string(buffer);
    data.field3 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [field5]
    tmp = _deserializer.float32(buffer);
    data.field5 = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rosbag/PartiallyMigrated';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b942bf4a41fb2bebc502889fd8981dfe';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32            field1 # 40
    MigratedExplicit field2 # (17, 58.2, "aldfkja", 82)
    string           field3 # "radasdk"
    float32          field5 # 63.4
    
    ================================================================================
    MSG: test_rosbag/MigratedExplicit
    Header  header
    float32 afield2 #58.2
    string  combo_field3 #"aldfkja 17"
    int32   afield4 #82
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

module.exports = PartiallyMigrated;
