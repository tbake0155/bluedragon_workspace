// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class NavVELECEF {
  constructor() {
    this.iTOW = 0;
    this.ecefVX = 0;
    this.ecefVY = 0;
    this.ecefVZ = 0;
    this.sAcc = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type NavVELECEF
    // Serialize message field [iTOW]
    bufferInfo = _serializer.uint32(obj.iTOW, bufferInfo);
    // Serialize message field [ecefVX]
    bufferInfo = _serializer.int32(obj.ecefVX, bufferInfo);
    // Serialize message field [ecefVY]
    bufferInfo = _serializer.int32(obj.ecefVY, bufferInfo);
    // Serialize message field [ecefVZ]
    bufferInfo = _serializer.int32(obj.ecefVZ, bufferInfo);
    // Serialize message field [sAcc]
    bufferInfo = _serializer.uint32(obj.sAcc, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type NavVELECEF
    let tmp;
    let len;
    let data = new NavVELECEF();
    // Deserialize message field [iTOW]
    tmp = _deserializer.uint32(buffer);
    data.iTOW = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ecefVX]
    tmp = _deserializer.int32(buffer);
    data.ecefVX = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ecefVY]
    tmp = _deserializer.int32(buffer);
    data.ecefVY = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ecefVZ]
    tmp = _deserializer.int32(buffer);
    data.ecefVZ = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [sAcc]
    tmp = _deserializer.uint32(buffer);
    data.sAcc = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ublox_msgs/NavVELECEF';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '97299f597364a39a6c0e96ed2ee4e702';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # NAV-VELECEF (0x01 0x11)
    # Velocity Solution in ECEF
    #
    # See important comments concerning validity of velocity given in section
    # Navigation Output Filters.
    #
    
    uint8 CLASS_ID = 1
    uint8 MESSAGE_ID = 17
    
    uint32 iTOW             # GPS Millisecond time of week [ms]
    
    int32 ecefVX            # ECEF X velocity [cm/s]
    int32 ecefVY            # ECEF Y velocity [cm/s]
    int32 ecefVZ            # ECEF Z velocity [cm/s]
    uint32 sAcc             # Speed Accuracy Estimate [cm/s]
    
    `;
  }

};

// Constants for message
NavVELECEF.Constants = {
  CLASS_ID: 1,
  MESSAGE_ID: 17,
}

module.exports = NavVELECEF;
