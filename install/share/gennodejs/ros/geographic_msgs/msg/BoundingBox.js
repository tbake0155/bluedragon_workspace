// Auto-generated. Do not edit!

// (in-package geographic_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let GeoPoint = require('./GeoPoint.js');

//-----------------------------------------------------------

class BoundingBox {
  constructor() {
    this.min_pt = new GeoPoint();
    this.max_pt = new GeoPoint();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type BoundingBox
    // Serialize message field [min_pt]
    bufferInfo = GeoPoint.serialize(obj.min_pt, bufferInfo);
    // Serialize message field [max_pt]
    bufferInfo = GeoPoint.serialize(obj.max_pt, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type BoundingBox
    let tmp;
    let len;
    let data = new BoundingBox();
    // Deserialize message field [min_pt]
    tmp = GeoPoint.deserialize(buffer);
    data.min_pt = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [max_pt]
    tmp = GeoPoint.deserialize(buffer);
    data.max_pt = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'geographic_msgs/BoundingBox';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'f62e8b5e390a3ac7603250d46e8f8446';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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
    
    `;
  }

};

module.exports = BoundingBox;
