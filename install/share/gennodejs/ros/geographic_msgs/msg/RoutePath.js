// Auto-generated. Do not edit!

// (in-package geographic_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let KeyValue = require('./KeyValue.js');
let std_msgs = _finder('std_msgs');
let uuid_msgs = _finder('uuid_msgs');

//-----------------------------------------------------------

class RoutePath {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.network = new uuid_msgs.msg.UniqueID();
    this.segments = [];
    this.props = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RoutePath
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [network]
    bufferInfo = uuid_msgs.msg.UniqueID.serialize(obj.network, bufferInfo);
    // Serialize the length for message field [segments]
    bufferInfo = _serializer.uint32(obj.segments.length, bufferInfo);
    // Serialize message field [segments]
    obj.segments.forEach((val) => {
      bufferInfo = uuid_msgs.msg.UniqueID.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [props]
    bufferInfo = _serializer.uint32(obj.props.length, bufferInfo);
    // Serialize message field [props]
    obj.props.forEach((val) => {
      bufferInfo = KeyValue.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type RoutePath
    let tmp;
    let len;
    let data = new RoutePath();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [network]
    tmp = uuid_msgs.msg.UniqueID.deserialize(buffer);
    data.network = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [segments]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [segments]
    data.segments = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = uuid_msgs.msg.UniqueID.deserialize(buffer);
      data.segments[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [props]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [props]
    data.props = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = KeyValue.deserialize(buffer);
      data.props[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'geographic_msgs/RoutePath';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '0aa2dd809a8091bdb4466dfefecbb8cf';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Path through a route network.
    #
    # A path is a sequence of RouteSegment edges.  This information is
    # extracted from a RouteNetwork graph.  A RoutePath lists the route
    # segments needed to reach some chosen goal.
    
    Header header
    
    uuid_msgs/UniqueID   network    # Route network containing this path
    uuid_msgs/UniqueID[] segments   # Sequence of RouteSegment IDs
    KeyValue[]           props      # Key/value properties
    
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
    MSG: uuid_msgs/UniqueID
    # A universally unique identifier (UUID).
    #
    #  http://en.wikipedia.org/wiki/Universally_unique_identifier
    #  http://tools.ietf.org/html/rfc4122.html
    
    uint8[16] uuid
    
    ================================================================================
    MSG: geographic_msgs/KeyValue
    # Geographic map tag (key, value) pair
    #
    # This is equivalent to diagnostic_msgs/KeyValue, repeated here to
    # avoid introducing a trivial stack dependency.
    
    string key                     # tag label
    string value                   # corresponding value
    
    `;
  }

};

module.exports = RoutePath;
