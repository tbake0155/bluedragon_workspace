// Auto-generated. Do not edit!

// (in-package test_rosbag.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class MigratedExplicit {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.afield2 = 0.0;
    this.combo_field3 = '';
    this.afield4 = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type MigratedExplicit
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [afield2]
    bufferInfo = _serializer.float32(obj.afield2, bufferInfo);
    // Serialize message field [combo_field3]
    bufferInfo = _serializer.string(obj.combo_field3, bufferInfo);
    // Serialize message field [afield4]
    bufferInfo = _serializer.int32(obj.afield4, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type MigratedExplicit
    let tmp;
    let len;
    let data = new MigratedExplicit();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [afield2]
    tmp = _deserializer.float32(buffer);
    data.afield2 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [combo_field3]
    tmp = _deserializer.string(buffer);
    data.combo_field3 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [afield4]
    tmp = _deserializer.int32(buffer);
    data.afield4 = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rosbag/MigratedExplicit';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '615f47263d68f3ea2dee962dc22dd171';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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

module.exports = MigratedExplicit;
