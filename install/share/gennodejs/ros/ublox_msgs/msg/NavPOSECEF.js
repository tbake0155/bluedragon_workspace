// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class NavPOSECEF {
  constructor() {
    this.iTOW = 0;
    this.ecefX = 0;
    this.ecefY = 0;
    this.ecefZ = 0;
    this.pAcc = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type NavPOSECEF
    // Serialize message field [iTOW]
    bufferInfo = _serializer.uint32(obj.iTOW, bufferInfo);
    // Serialize message field [ecefX]
    bufferInfo = _serializer.int32(obj.ecefX, bufferInfo);
    // Serialize message field [ecefY]
    bufferInfo = _serializer.int32(obj.ecefY, bufferInfo);
    // Serialize message field [ecefZ]
    bufferInfo = _serializer.int32(obj.ecefZ, bufferInfo);
    // Serialize message field [pAcc]
    bufferInfo = _serializer.uint32(obj.pAcc, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type NavPOSECEF
    let tmp;
    let len;
    let data = new NavPOSECEF();
    // Deserialize message field [iTOW]
    tmp = _deserializer.uint32(buffer);
    data.iTOW = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ecefX]
    tmp = _deserializer.int32(buffer);
    data.ecefX = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ecefY]
    tmp = _deserializer.int32(buffer);
    data.ecefY = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ecefZ]
    tmp = _deserializer.int32(buffer);
    data.ecefZ = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [pAcc]
    tmp = _deserializer.uint32(buffer);
    data.pAcc = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ublox_msgs/NavPOSECEF';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '6f1f4f9473d5586f7fa1427a3c53cee9';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # NAV-POSECEF (0x01 0x01)
    # Position Solution in ECEF
    #
    # See important comments concerning validity of position given in section
    # Navigation Output Filters.
    #
    
    uint8 CLASS_ID = 1
    uint8 MESSAGE_ID = 1
    
    uint32 iTOW             # GPS Millisecond Time of Week [ms]
    
    int32 ecefX             # ECEF X coordinate [cm]
    int32 ecefY             # ECEF Y coordinate [cm]
    int32 ecefZ             # ECEF Z coordinate [cm]
    uint32 pAcc             # Position Accuracy Estimate [cm]
    
    `;
  }

};

// Constants for message
NavPOSECEF.Constants = {
  CLASS_ID: 1,
  MESSAGE_ID: 1,
}

module.exports = NavPOSECEF;
