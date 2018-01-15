// Auto-generated. Do not edit!

// (in-package geographic_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let GeoPoint = require('./GeoPoint.js');
let KeyValue = require('./KeyValue.js');
let uuid_msgs = _finder('uuid_msgs');

//-----------------------------------------------------------

class WayPoint {
  constructor() {
    this.id = new uuid_msgs.msg.UniqueID();
    this.position = new GeoPoint();
    this.props = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type WayPoint
    // Serialize message field [id]
    bufferInfo = uuid_msgs.msg.UniqueID.serialize(obj.id, bufferInfo);
    // Serialize message field [position]
    bufferInfo = GeoPoint.serialize(obj.position, bufferInfo);
    // Serialize the length for message field [props]
    bufferInfo = _serializer.uint32(obj.props.length, bufferInfo);
    // Serialize message field [props]
    obj.props.forEach((val) => {
      bufferInfo = KeyValue.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type WayPoint
    let tmp;
    let len;
    let data = new WayPoint();
    // Deserialize message field [id]
    tmp = uuid_msgs.msg.UniqueID.deserialize(buffer);
    data.id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [position]
    tmp = GeoPoint.deserialize(buffer);
    data.position = tmp.data;
    buffer = tmp.buffer;
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
    return 'geographic_msgs/WayPoint';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ef04f823aef332455a49eaec3f1761b7';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Way-point element for a geographic map.
    
    uuid_msgs/UniqueID id   # Unique way-point identifier
    GeoPoint   position     # Position relative to WGS 84 ellipsoid
    KeyValue[] props        # Key/value properties for this point
    
    ================================================================================
    MSG: uuid_msgs/UniqueID
    # A universally unique identifier (UUID).
    #
    #  http://en.wikipedia.org/wiki/Universally_unique_identifier
    #  http://tools.ietf.org/html/rfc4122.html
    
    uint8[16] uuid
    
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

module.exports = WayPoint;
