// Auto-generated. Do not edit!

// (in-package test_roscpp.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Point32 = require('./Point32.js');
let ChannelFloat32 = require('./ChannelFloat32.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class PointCloud {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.pts = [];
    this.chan = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type PointCloud
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize the length for message field [pts]
    bufferInfo = _serializer.uint32(obj.pts.length, bufferInfo);
    // Serialize message field [pts]
    obj.pts.forEach((val) => {
      bufferInfo = Point32.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [chan]
    bufferInfo = _serializer.uint32(obj.chan.length, bufferInfo);
    // Serialize message field [chan]
    obj.chan.forEach((val) => {
      bufferInfo = ChannelFloat32.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type PointCloud
    let tmp;
    let len;
    let data = new PointCloud();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [pts]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [pts]
    data.pts = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Point32.deserialize(buffer);
      data.pts[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [chan]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [chan]
    data.chan = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = ChannelFloat32.deserialize(buffer);
      data.chan[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_roscpp/PointCloud';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c47b5cedd2b77d241b27547ed7624840';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    Point32[] pts
    ChannelFloat32[] chan
    
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
    MSG: test_roscpp/Point32
    float32 x
    float32 y
    float32 z
    ================================================================================
    MSG: test_roscpp/ChannelFloat32
    string name
    float32[] vals
    `;
  }

};

module.exports = PointCloud;
