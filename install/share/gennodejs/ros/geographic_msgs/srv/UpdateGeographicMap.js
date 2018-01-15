// Auto-generated. Do not edit!

// (in-package geographic_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let GeographicMapChanges = require('../msg/GeographicMapChanges.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class UpdateGeographicMapRequest {
  constructor() {
    this.updates = new GeographicMapChanges();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type UpdateGeographicMapRequest
    // Serialize message field [updates]
    bufferInfo = GeographicMapChanges.serialize(obj.updates, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type UpdateGeographicMapRequest
    let tmp;
    let len;
    let data = new UpdateGeographicMapRequest();
    // Deserialize message field [updates]
    tmp = GeographicMapChanges.deserialize(buffer);
    data.updates = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'geographic_msgs/UpdateGeographicMapRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '8d8da723a1fadc5f7621a18b4e72fc3b';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    GeographicMapChanges updates
    
    
    ================================================================================
    MSG: geographic_msgs/GeographicMapChanges
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

class UpdateGeographicMapResponse {
  constructor() {
    this.success = false;
    this.status = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type UpdateGeographicMapResponse
    // Serialize message field [success]
    bufferInfo = _serializer.bool(obj.success, bufferInfo);
    // Serialize message field [status]
    bufferInfo = _serializer.string(obj.status, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type UpdateGeographicMapResponse
    let tmp;
    let len;
    let data = new UpdateGeographicMapResponse();
    // Deserialize message field [success]
    tmp = _deserializer.bool(buffer);
    data.success = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [status]
    tmp = _deserializer.string(buffer);
    data.status = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'geographic_msgs/UpdateGeographicMapResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '38b8954d32a849f31d78416b12bff5d1';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    bool   success
    string status
    
    
    `;
  }

};

module.exports = {
  Request: UpdateGeographicMapRequest,
  Response: UpdateGeographicMapResponse
};