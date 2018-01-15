// Auto-generated. Do not edit!

// (in-package geographic_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class GeoPoint {
  constructor() {
    this.latitude = 0.0;
    this.longitude = 0.0;
    this.altitude = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GeoPoint
    // Serialize message field [latitude]
    bufferInfo = _serializer.float64(obj.latitude, bufferInfo);
    // Serialize message field [longitude]
    bufferInfo = _serializer.float64(obj.longitude, bufferInfo);
    // Serialize message field [altitude]
    bufferInfo = _serializer.float64(obj.altitude, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GeoPoint
    let tmp;
    let len;
    let data = new GeoPoint();
    // Deserialize message field [latitude]
    tmp = _deserializer.float64(buffer);
    data.latitude = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [longitude]
    tmp = _deserializer.float64(buffer);
    data.longitude = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [altitude]
    tmp = _deserializer.float64(buffer);
    data.altitude = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'geographic_msgs/GeoPoint';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c48027a852aeff972be80478ff38e81a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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
    
    `;
  }

};

module.exports = GeoPoint;
