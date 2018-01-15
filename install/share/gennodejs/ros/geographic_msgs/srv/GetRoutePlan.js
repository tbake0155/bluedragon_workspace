// Auto-generated. Do not edit!

// (in-package geographic_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let uuid_msgs = _finder('uuid_msgs');

//-----------------------------------------------------------

let RoutePath = require('../msg/RoutePath.js');

//-----------------------------------------------------------

class GetRoutePlanRequest {
  constructor() {
    this.network = new uuid_msgs.msg.UniqueID();
    this.start = new uuid_msgs.msg.UniqueID();
    this.goal = new uuid_msgs.msg.UniqueID();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetRoutePlanRequest
    // Serialize message field [network]
    bufferInfo = uuid_msgs.msg.UniqueID.serialize(obj.network, bufferInfo);
    // Serialize message field [start]
    bufferInfo = uuid_msgs.msg.UniqueID.serialize(obj.start, bufferInfo);
    // Serialize message field [goal]
    bufferInfo = uuid_msgs.msg.UniqueID.serialize(obj.goal, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetRoutePlanRequest
    let tmp;
    let len;
    let data = new GetRoutePlanRequest();
    // Deserialize message field [network]
    tmp = uuid_msgs.msg.UniqueID.deserialize(buffer);
    data.network = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [start]
    tmp = uuid_msgs.msg.UniqueID.deserialize(buffer);
    data.start = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [goal]
    tmp = uuid_msgs.msg.UniqueID.deserialize(buffer);
    data.goal = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'geographic_msgs/GetRoutePlanRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e56ac34268c6d575dabb30f42da4a47a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    uuid_msgs/UniqueID network
    uuid_msgs/UniqueID start
    uuid_msgs/UniqueID goal
    
    
    ================================================================================
    MSG: uuid_msgs/UniqueID
    # A universally unique identifier (UUID).
    #
    #  http://en.wikipedia.org/wiki/Universally_unique_identifier
    #  http://tools.ietf.org/html/rfc4122.html
    
    uint8[16] uuid
    
    `;
  }

};

class GetRoutePlanResponse {
  constructor() {
    this.success = false;
    this.status = '';
    this.plan = new RoutePath();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetRoutePlanResponse
    // Serialize message field [success]
    bufferInfo = _serializer.bool(obj.success, bufferInfo);
    // Serialize message field [status]
    bufferInfo = _serializer.string(obj.status, bufferInfo);
    // Serialize message field [plan]
    bufferInfo = RoutePath.serialize(obj.plan, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetRoutePlanResponse
    let tmp;
    let len;
    let data = new GetRoutePlanResponse();
    // Deserialize message field [success]
    tmp = _deserializer.bool(buffer);
    data.success = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [status]
    tmp = _deserializer.string(buffer);
    data.status = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [plan]
    tmp = RoutePath.deserialize(buffer);
    data.plan = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'geographic_msgs/GetRoutePlanResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '28ee54f0ccb2ab28b46048ebc6fa5aff';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    bool            success
    string          status
    
    RoutePath       plan
    
    
    ================================================================================
    MSG: geographic_msgs/RoutePath
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

module.exports = {
  Request: GetRoutePlanRequest,
  Response: GetRoutePlanResponse
};
