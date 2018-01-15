// Auto-generated. Do not edit!

// (in-package geographic_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let GeographicMap = require('./GeographicMap.js');
let std_msgs = _finder('std_msgs');
let uuid_msgs = _finder('uuid_msgs');

//-----------------------------------------------------------

class GeographicMapChanges {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.diffs = new GeographicMap();
    this.deletes = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GeographicMapChanges
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [diffs]
    bufferInfo = GeographicMap.serialize(obj.diffs, bufferInfo);
    // Serialize the length for message field [deletes]
    bufferInfo = _serializer.uint32(obj.deletes.length, bufferInfo);
    // Serialize message field [deletes]
    obj.deletes.forEach((val) => {
      bufferInfo = uuid_msgs.msg.UniqueID.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GeographicMapChanges
    let tmp;
    let len;
    let data = new GeographicMapChanges();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [diffs]
    tmp = GeographicMap.deserialize(buffer);
    data.diffs = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [deletes]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [deletes]
    data.deletes = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = uuid_msgs.msg.UniqueID.deserialize(buffer);
      data.deletes[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'geographic_msgs/GeographicMapChanges';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '4fd027f54298203ec12aa1c4b20e6cb8';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # A list of geographic map changes.
    
    Header header                   # stamp specifies time of change
                                    # frame_id (normally /map)
    
    GeographicMap diffs             # new and changed points and features
    uuid_msgs/UniqueID[] deletes    # deleted map components
    
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
    MSG: geographic_msgs/GeographicMap
    # Geographic map for a specified region.
    
    Header header            # stamp specifies time
                             # frame_id (normally /map)
    
    uuid_msgs/UniqueID id    # identifier for this map
    BoundingBox  bounds      # 2D bounding box containing map
    
    WayPoint[]   points      # way-points
    MapFeature[] features    # map features
    KeyValue[]   props       # map properties
    
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
    MSG: geographic_msgs/MapFeature
    # Geographic map feature.
    #
    # A list of WayPoint IDs for features like streets, highways, hiking
    # trails, the outlines of buildings and parking lots in sequential
    # order.
    #
    # Feature lists may also contain other feature lists as members.
    
    uuid_msgs/UniqueID   id         # Unique feature identifier
    uuid_msgs/UniqueID[] components # Sequence of feature components
    KeyValue[] props                # Key/value properties for this feature
    
    `;
  }

};

module.exports = GeographicMapChanges;
