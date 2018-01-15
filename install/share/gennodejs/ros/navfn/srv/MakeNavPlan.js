// Auto-generated. Do not edit!

// (in-package navfn.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------


//-----------------------------------------------------------

class MakeNavPlanRequest {
  constructor() {
    this.start = new geometry_msgs.msg.PoseStamped();
    this.goal = new geometry_msgs.msg.PoseStamped();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type MakeNavPlanRequest
    // Serialize message field [start]
    bufferInfo = geometry_msgs.msg.PoseStamped.serialize(obj.start, bufferInfo);
    // Serialize message field [goal]
    bufferInfo = geometry_msgs.msg.PoseStamped.serialize(obj.goal, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type MakeNavPlanRequest
    let tmp;
    let len;
    let data = new MakeNavPlanRequest();
    // Deserialize message field [start]
    tmp = geometry_msgs.msg.PoseStamped.deserialize(buffer);
    data.start = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [goal]
    tmp = geometry_msgs.msg.PoseStamped.deserialize(buffer);
    data.goal = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'navfn/MakeNavPlanRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '2fe3126bd5b2d56edd5005220333d4fd';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    geometry_msgs/PoseStamped start
    geometry_msgs/PoseStamped goal
    
    ================================================================================
    MSG: geometry_msgs/PoseStamped
    # A Pose with reference coordinate frame and timestamp
    Header header
    Pose pose
    
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
    MSG: geometry_msgs/Pose
    # A representation of pose in free space, composed of position and orientation. 
    Point position
    Quaternion orientation
    
    ================================================================================
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
    ================================================================================
    MSG: geometry_msgs/Quaternion
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
    `;
  }

};

class MakeNavPlanResponse {
  constructor() {
    this.plan_found = 0;
    this.error_message = '';
    this.path = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type MakeNavPlanResponse
    // Serialize message field [plan_found]
    bufferInfo = _serializer.uint8(obj.plan_found, bufferInfo);
    // Serialize message field [error_message]
    bufferInfo = _serializer.string(obj.error_message, bufferInfo);
    // Serialize the length for message field [path]
    bufferInfo = _serializer.uint32(obj.path.length, bufferInfo);
    // Serialize message field [path]
    obj.path.forEach((val) => {
      bufferInfo = geometry_msgs.msg.PoseStamped.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type MakeNavPlanResponse
    let tmp;
    let len;
    let data = new MakeNavPlanResponse();
    // Deserialize message field [plan_found]
    tmp = _deserializer.uint8(buffer);
    data.plan_found = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [error_message]
    tmp = _deserializer.string(buffer);
    data.error_message = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [path]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [path]
    data.path = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = geometry_msgs.msg.PoseStamped.deserialize(buffer);
      data.path[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'navfn/MakeNavPlanResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '8b8ed7edf1b237dc9ddda8c8ffed5d3a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    uint8 plan_found
    string error_message
    
    
    geometry_msgs/PoseStamped[] path
    
    
    ================================================================================
    MSG: geometry_msgs/PoseStamped
    # A Pose with reference coordinate frame and timestamp
    Header header
    Pose pose
    
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
    MSG: geometry_msgs/Pose
    # A representation of pose in free space, composed of position and orientation. 
    Point position
    Quaternion orientation
    
    ================================================================================
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
    ================================================================================
    MSG: geometry_msgs/Quaternion
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
    `;
  }

};

module.exports = {
  Request: MakeNavPlanRequest,
  Response: MakeNavPlanResponse
};
