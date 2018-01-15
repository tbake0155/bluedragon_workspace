// Auto-generated. Do not edit!

// (in-package geographic_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let BoundingBox = require('./BoundingBox.js');
let WayPoint = require('./WayPoint.js');
let RouteSegment = require('./RouteSegment.js');
let KeyValue = require('./KeyValue.js');
let std_msgs = _finder('std_msgs');
let uuid_msgs = _finder('uuid_msgs');

//-----------------------------------------------------------

class RouteNetwork {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.id = new uuid_msgs.msg.UniqueID();
    this.bounds = new BoundingBox();
    this.points = [];
    this.segments = [];
    this.props = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RouteNetwork
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [id]
    bufferInfo = uuid_msgs.msg.UniqueID.serialize(obj.id, bufferInfo);
    // Serialize message field [bounds]
    bufferInfo = BoundingBox.serialize(obj.bounds, bufferInfo);
    // Serialize the length for message field [points]
    bufferInfo = _serializer.uint32(obj.points.length, bufferInfo);
    // Serialize message field [points]
    obj.points.forEach((val) => {
      bufferInfo = WayPoint.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [segments]
    bufferInfo = _serializer.uint32(obj.segments.length, bufferInfo);
    // Serialize message field [segments]
    obj.segments.forEach((val) => {
      bufferInfo = RouteSegment.serialize(val, bufferInfo);
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
    //deserializes a message object of type RouteNetwork
    let tmp;
    let len;
    let data = new RouteNetwork();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [id]
    tmp = uuid_msgs.msg.UniqueID.deserialize(buffer);
    data.id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [bounds]
    tmp = BoundingBox.deserialize(buffer);
    data.bounds = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [points]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [points]
    data.points = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = WayPoint.deserialize(buffer);
      data.points[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [segments]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [segments]
    data.segments = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = RouteSegment.deserialize(buffer);
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
    return 'geographic_msgs/RouteNetwork';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'fd717c0a34a7c954deed32c6847f30a8';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Geographic map route network.
    #
    # A directed graph of WayPoint nodes and RouteSegment edges.  This
    # information is extracted from the more-detailed contents of a
    # GeographicMap.  A RouteNetwork contains only the way points and
    # route segments of interest for path planning.
    
    Header          header
    
    uuid_msgs/UniqueID id    # This route network identifier
    BoundingBox     bounds   # 2D bounding box for network
    
    WayPoint[]      points   # Way points in this network
    RouteSegment[]  segments # Directed edges of this network
    
    KeyValue[]      props    # Network key/value properties
    
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
    MSG: geographic_msgs/BoundingBox
    # Geographic map bounding box. 
    #
    # The two GeoPoints denote diagonally opposite corners of the box.
    #
    # If min_pt.latitude is NaN, the bounding box is "global", matching
    # any valid latitude, longitude and altitude.
    #
    # If min_pt.altitude is NaN, the bounding box is two-dimensional and
    # matches any altitude within the specified latitude and longitude
    # range.
    
    GeoPoint min_pt         # lowest and most Southwestern corner
    GeoPoint max_pt         # highest and most Northeastern corner
    
    ================================================================================
    MSG: geographic_msgs/GeoPoint
    # Geographic point, using the WGS 84 reference ellipsoid.
    
    # Latitude [degrees]. Positive is north of equator; negative is south
    # (-90 <= latitude <= +90).
    float64 latitude
    
    # Longitude [degrees]. Positive is east of prime meridian; negative is
    # west (-180 <= longitude <= +180). At the poles, latitude is -90 or
    # +90, and longitude is irrelevant, but must be in range.
    float64 longitude
    
    # Altitude [m]. Positive is above the WGS 84 ellipsoid (NaN if unspecified).
    float64 altitude
    
    ================================================================================
    MSG: geographic_msgs/WayPoint
    # Way-point element for a geographic map.
    
    uuid_msgs/UniqueID id   # Unique way-point identifier
    GeoPoint   position     # Position relative to WGS 84 ellipsoid
    KeyValue[] props        # Key/value properties for this point
    
    ================================================================================
    MSG: geographic_msgs/KeyValue
    # Geographic map tag (key, value) pair
    #
    # This is equivalent to diagnostic_msgs/KeyValue, repeated here to
    # avoid introducing a trivial stack dependency.
    
    string key                     # tag label
    string value                   # corresponding value
    
    ================================================================================
    MSG: geographic_msgs/RouteSegment
    # Route network segment.
    #
    # This is one directed edge of a RouteNetwork graph. It represents a
    # known path from one way point to another.  If the path is two-way,
    # there will be another RouteSegment with "start" and "end" reversed.
    
    uuid_msgs/UniqueID id           # Unique identifier for this segment
    
    uuid_msgs/UniqueID start        # beginning way point of segment
    uuid_msgs/UniqueID end          # ending way point of segment
    
    KeyValue[] props                # segment properties
    
    `;
  }

};

module.exports = RouteNetwork;
