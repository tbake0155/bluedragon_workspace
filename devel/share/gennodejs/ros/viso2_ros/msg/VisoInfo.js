// Auto-generated. Do not edit!

// (in-package viso2_ros.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class VisoInfo {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.got_lost = false;
    this.change_reference_frame = false;
    this.motion_estimate_valid = false;
    this.num_matches = 0;
    this.num_inliers = 0;
    this.runtime = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type VisoInfo
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [got_lost]
    bufferInfo = _serializer.bool(obj.got_lost, bufferInfo);
    // Serialize message field [change_reference_frame]
    bufferInfo = _serializer.bool(obj.change_reference_frame, bufferInfo);
    // Serialize message field [motion_estimate_valid]
    bufferInfo = _serializer.bool(obj.motion_estimate_valid, bufferInfo);
    // Serialize message field [num_matches]
    bufferInfo = _serializer.int32(obj.num_matches, bufferInfo);
    // Serialize message field [num_inliers]
    bufferInfo = _serializer.int32(obj.num_inliers, bufferInfo);
    // Serialize message field [runtime]
    bufferInfo = _serializer.float64(obj.runtime, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type VisoInfo
    let tmp;
    let len;
    let data = new VisoInfo();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [got_lost]
    tmp = _deserializer.bool(buffer);
    data.got_lost = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [change_reference_frame]
    tmp = _deserializer.bool(buffer);
    data.change_reference_frame = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [motion_estimate_valid]
    tmp = _deserializer.bool(buffer);
    data.motion_estimate_valid = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [num_matches]
    tmp = _deserializer.int32(buffer);
    data.num_matches = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [num_inliers]
    tmp = _deserializer.int32(buffer);
    data.num_inliers = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [runtime]
    tmp = _deserializer.float64(buffer);
    data.runtime = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'viso2_ros/VisoInfo';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '765500d8b83bf74f7715c6e2e8e89092';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Internal information on the
    # viso2 algorithm parameters
    # and results
    
    Header header
    
    # True if the previous iteration of viso2
    # was not able to complete the matching process
    # therefore the visual odometer is re-started.
    bool got_lost
    
    # True if in the next run the reference 
    # frame will be changed. This is the case
    # when the number of inliers drops below
    # a threshold or the previous motion estimate
    # failed in last motion estimation.
    bool change_reference_frame
    
    # info from motion estimator
    bool motion_estimate_valid
    int32 num_matches
    int32 num_inliers
    
    # runtime of last iteration in seconds
    float64 runtime
    
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

module.exports = VisoInfo;
