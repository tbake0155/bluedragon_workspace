// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class NavPOSLLH {
  constructor() {
    this.iTOW = 0;
    this.lon = 0;
    this.lat = 0;
    this.height = 0;
    this.hMSL = 0;
    this.hAcc = 0;
    this.vAcc = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type NavPOSLLH
    // Serialize message field [iTOW]
    bufferInfo = _serializer.uint32(obj.iTOW, bufferInfo);
    // Serialize message field [lon]
    bufferInfo = _serializer.int32(obj.lon, bufferInfo);
    // Serialize message field [lat]
    bufferInfo = _serializer.int32(obj.lat, bufferInfo);
    // Serialize message field [height]
    bufferInfo = _serializer.int32(obj.height, bufferInfo);
    // Serialize message field [hMSL]
    bufferInfo = _serializer.int32(obj.hMSL, bufferInfo);
    // Serialize message field [hAcc]
    bufferInfo = _serializer.uint32(obj.hAcc, bufferInfo);
    // Serialize message field [vAcc]
    bufferInfo = _serializer.uint32(obj.vAcc, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type NavPOSLLH
    let tmp;
    let len;
    let data = new NavPOSLLH();
    // Deserialize message field [iTOW]
    tmp = _deserializer.uint32(buffer);
    data.iTOW = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [lon]
    tmp = _deserializer.int32(buffer);
    data.lon = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [lat]
    tmp = _deserializer.int32(buffer);
    data.lat = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [height]
    tmp = _deserializer.int32(buffer);
    data.height = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [hMSL]
    tmp = _deserializer.int32(buffer);
    data.hMSL = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [hAcc]
    tmp = _deserializer.uint32(buffer);
    data.hAcc = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [vAcc]
    tmp = _deserializer.uint32(buffer);
    data.vAcc = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ublox_msgs/NavPOSLLH';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '01aab2c75cd9f8c402a0689e82f04f01';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # NAV-POSLLH (0x01 0x02)
    # Geodetic Position Solution
    #
    # See important comments concerning validity of position given in section
    # Navigation Output Filters.
    # This message outputs the Geodetic position in the currently selected Ellipsoid. The default is
    # the WGS84 Ellipsoid, but can be changed with the message CFG-DAT.
    #
    
    uint8 CLASS_ID = 1
    uint8 MESSAGE_ID = 2
    
    uint32 iTOW             # GPS Millisecond Time of Week [ms]
    
    int32 lon               # Longitude [deg/1e-7]
    int32 lat               # Latitude [deg/1e-7]
    int32 height            # Height above Ellipsoid [mm]
    int32 hMSL              # Height above mean sea level [mm]
    uint32 hAcc             # Horizontal Accuracy Estimate [mm]
    uint32 vAcc             # Vertical Accuracy Estimate [mm]
    
    `;
  }

};

// Constants for message
NavPOSLLH.Constants = {
  CLASS_ID: 1,
  MESSAGE_ID: 2,
}

module.exports = NavPOSLLH;
