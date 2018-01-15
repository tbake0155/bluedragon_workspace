// Auto-generated. Do not edit!

// (in-package costmap_2d.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class VoxelGrid {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.data = [];
    this.origin = new geometry_msgs.msg.Point32();
    this.resolutions = new geometry_msgs.msg.Vector3();
    this.size_x = 0;
    this.size_y = 0;
    this.size_z = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type VoxelGrid
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize the length for message field [data]
    bufferInfo = _serializer.uint32(obj.data.length, bufferInfo);
    // Serialize message field [data]
    obj.data.forEach((val) => {
      bufferInfo = _serializer.uint32(val, bufferInfo);
    });
    // Serialize message field [origin]
    bufferInfo = geometry_msgs.msg.Point32.serialize(obj.origin, bufferInfo);
    // Serialize message field [resolutions]
    bufferInfo = geometry_msgs.msg.Vector3.serialize(obj.resolutions, bufferInfo);
    // Serialize message field [size_x]
    bufferInfo = _serializer.uint32(obj.size_x, bufferInfo);
    // Serialize message field [size_y]
    bufferInfo = _serializer.uint32(obj.size_y, bufferInfo);
    // Serialize message field [size_z]
    bufferInfo = _serializer.uint32(obj.size_z, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type VoxelGrid
    let tmp;
    let len;
    let data = new VoxelGrid();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [data]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [data]
    data.data = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.uint32(buffer);
      data.data[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [origin]
    tmp = geometry_msgs.msg.Point32.deserialize(buffer);
    data.origin = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [resolutions]
    tmp = geometry_msgs.msg.Vector3.deserialize(buffer);
    data.resolutions = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [size_x]
    tmp = _deserializer.uint32(buffer);
    data.size_x = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [size_y]
    tmp = _deserializer.uint32(buffer);
    data.size_y = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [size_z]
    tmp = _deserializer.uint32(buffer);
    data.size_z = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'costmap_2d/VoxelGrid';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '48a040827e1322073d78ece5a497029c';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    uint32[] data
    geometry_msgs/Point32 origin
    geometry_msgs/Vector3 resolutions
    uint32 size_x
    uint32 size_y
    uint32 size_z
    
    
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
    MSG: geometry_msgs/Point32
    # This contains the position of a point in free space(with 32 bits of precision).
    # It is recommeded to use Point wherever possible instead of Point32.  
    # 
    # This recommendation is to promote interoperability.  
    #
    # This message is designed to take up less space when sending
    # lots of points at once, as in the case of a PointCloud.  
    
    float32 x
    float32 y
    float32 z
    ================================================================================
    MSG: geometry_msgs/Vector3
    # This represents a vector in free space. 
    # It is only meant to represent a direction. Therefore, it does not
    # make sense to apply a translation to it (e.g., when applying a 
    # generic rigid transformation to a Vector3, tf2 will only apply the
    # rotation). If you want your data to be translatable too, use the
    # geometry_msgs/Point message instead.
    
    float64 x
    float64 y
    float64 z
    `;
  }

};

module.exports = VoxelGrid;
