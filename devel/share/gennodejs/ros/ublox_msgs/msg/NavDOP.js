// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class NavDOP {
  constructor() {
    this.iTOW = 0;
    this.gDOP = 0;
    this.pDOP = 0;
    this.tDOP = 0;
    this.vDOP = 0;
    this.hDOP = 0;
    this.nDOP = 0;
    this.eDOP = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type NavDOP
    // Serialize message field [iTOW]
    bufferInfo = _serializer.uint32(obj.iTOW, bufferInfo);
    // Serialize message field [gDOP]
    bufferInfo = _serializer.uint16(obj.gDOP, bufferInfo);
    // Serialize message field [pDOP]
    bufferInfo = _serializer.uint16(obj.pDOP, bufferInfo);
    // Serialize message field [tDOP]
    bufferInfo = _serializer.uint16(obj.tDOP, bufferInfo);
    // Serialize message field [vDOP]
    bufferInfo = _serializer.uint16(obj.vDOP, bufferInfo);
    // Serialize message field [hDOP]
    bufferInfo = _serializer.uint16(obj.hDOP, bufferInfo);
    // Serialize message field [nDOP]
    bufferInfo = _serializer.uint16(obj.nDOP, bufferInfo);
    // Serialize message field [eDOP]
    bufferInfo = _serializer.uint16(obj.eDOP, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type NavDOP
    let tmp;
    let len;
    let data = new NavDOP();
    // Deserialize message field [iTOW]
    tmp = _deserializer.uint32(buffer);
    data.iTOW = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [gDOP]
    tmp = _deserializer.uint16(buffer);
    data.gDOP = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [pDOP]
    tmp = _deserializer.uint16(buffer);
    data.pDOP = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [tDOP]
    tmp = _deserializer.uint16(buffer);
    data.tDOP = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [vDOP]
    tmp = _deserializer.uint16(buffer);
    data.vDOP = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [hDOP]
    tmp = _deserializer.uint16(buffer);
    data.hDOP = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [nDOP]
    tmp = _deserializer.uint16(buffer);
    data.nDOP = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [eDOP]
    tmp = _deserializer.uint16(buffer);
    data.eDOP = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ublox_msgs/NavDOP';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '19fe2210fc48e52c1c14b7d2c567407f';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # NAV-DOP (0x01 0x04)
    # Dilution of precision
    #
    # - DOP values are dimensionless.
    # - All DOP values are scaled by a factor of 100. If the unit transmits a value of e.g. 156, the
    #   DOP value is 1.56.
    #
    
    uint8 CLASS_ID = 1
    uint8 MESSAGE_ID = 4
    
    uint32 iTOW             # GPS Millisecond Time of Week [ms]
    
    uint16 gDOP             # Geometric DOP
    uint16 pDOP             # Position DOP
    uint16 tDOP             # Time DOP
    uint16 vDOP             # Vertical DOP
    uint16 hDOP             # Horizontal DOP
    uint16 nDOP             # Northing DOP
    uint16 eDOP             # Easting DOP
    
    `;
  }

};

// Constants for message
NavDOP.Constants = {
  CLASS_ID: 1,
  MESSAGE_ID: 4,
}

module.exports = NavDOP;
