// Auto-generated. Do not edit!

// (in-package geographic_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let GeoPoint = require('./GeoPoint.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class GeoPose {
  constructor() {
    this.position = new GeoPoint();
    this.orientation = new geometry_msgs.msg.Quaternion();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GeoPose
    // Serialize message field [position]
    bufferInfo = GeoPoint.serialize(obj.position, bufferInfo);
    // Serialize message field [orientation]
    bufferInfo = geometry_msgs.msg.Quaternion.serialize(obj.orientation, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GeoPose
    let tmp;
    let len;
    let data = new GeoPose();
    // Deserialize message field [position]
    tmp = GeoPoint.deserialize(buffer);
    data.position = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [orientation]
    tmp = geometry_msgs.msg.Quaternion.deserialize(buffer);
    data.orientation = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'geographic_msgs/GeoPose';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '778680b5172de58b7c057d973576c784';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Geographic pose, using the WGS 84 reference ellipsoid.
    #
    # Orientation uses the East-North-Up (ENU) frame of reference.
    # (But, what about singularities at the poles?)
    
    GeoPoint position
    geometry_msgs/Quaternion orientation
    
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
    MSG: geometry_msgs/Quaternion
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
    `;
  }

};

module.exports = GeoPose;
