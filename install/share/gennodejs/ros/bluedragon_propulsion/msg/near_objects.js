// Auto-generated. Do not edit!

// (in-package bluedragon_propulsion.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class near_objects {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.X_objects = [];
    this.Y_objects = [];
    this.radians = [];
    this.radius = [];
    this.green_bouy = [];
    this.red_bouy = [];
    this.zone = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type near_objects
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize the length for message field [X_objects]
    bufferInfo = _serializer.uint32(obj.X_objects.length, bufferInfo);
    // Serialize message field [X_objects]
    obj.X_objects.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [Y_objects]
    bufferInfo = _serializer.uint32(obj.Y_objects.length, bufferInfo);
    // Serialize message field [Y_objects]
    obj.Y_objects.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [radians]
    bufferInfo = _serializer.uint32(obj.radians.length, bufferInfo);
    // Serialize message field [radians]
    obj.radians.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [radius]
    bufferInfo = _serializer.uint32(obj.radius.length, bufferInfo);
    // Serialize message field [radius]
    obj.radius.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [green_bouy]
    bufferInfo = _serializer.uint32(obj.green_bouy.length, bufferInfo);
    // Serialize message field [green_bouy]
    obj.green_bouy.forEach((val) => {
      bufferInfo = _serializer.bool(val, bufferInfo);
    });
    // Serialize the length for message field [red_bouy]
    bufferInfo = _serializer.uint32(obj.red_bouy.length, bufferInfo);
    // Serialize message field [red_bouy]
    obj.red_bouy.forEach((val) => {
      bufferInfo = _serializer.bool(val, bufferInfo);
    });
    // Serialize the length for message field [zone]
    bufferInfo = _serializer.uint32(obj.zone.length, bufferInfo);
    // Serialize message field [zone]
    obj.zone.forEach((val) => {
      bufferInfo = _serializer.int64(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type near_objects
    let tmp;
    let len;
    let data = new near_objects();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [X_objects]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [X_objects]
    data.X_objects = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.X_objects[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [Y_objects]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [Y_objects]
    data.Y_objects = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.Y_objects[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [radians]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [radians]
    data.radians = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.radians[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [radius]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [radius]
    data.radius = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.radius[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [green_bouy]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [green_bouy]
    data.green_bouy = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.bool(buffer);
      data.green_bouy[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [red_bouy]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [red_bouy]
    data.red_bouy = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.bool(buffer);
      data.red_bouy[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [zone]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [zone]
    data.zone = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int64(buffer);
      data.zone[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'bluedragon_propulsion/near_objects';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '082e7af6d2a808fec3817c0e5bab0b7d';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    
    float64[] X_objects 
    float64[] Y_objects
    float64[] radians
    float64[] radius
    bool[] green_bouy
    bool[] red_bouy
    int64[] zone
    
    
    
    
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

module.exports = near_objects;
