// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class NavDGPS_SV {
  constructor() {
    this.svid = 0;
    this.flags = 0;
    this.ageC = 0;
    this.prc = 0.0;
    this.prrc = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type NavDGPS_SV
    // Serialize message field [svid]
    bufferInfo = _serializer.uint8(obj.svid, bufferInfo);
    // Serialize message field [flags]
    bufferInfo = _serializer.uint8(obj.flags, bufferInfo);
    // Serialize message field [ageC]
    bufferInfo = _serializer.uint16(obj.ageC, bufferInfo);
    // Serialize message field [prc]
    bufferInfo = _serializer.float32(obj.prc, bufferInfo);
    // Serialize message field [prrc]
    bufferInfo = _serializer.float32(obj.prrc, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type NavDGPS_SV
    let tmp;
    let len;
    let data = new NavDGPS_SV();
    // Deserialize message field [svid]
    tmp = _deserializer.uint8(buffer);
    data.svid = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [flags]
    tmp = _deserializer.uint8(buffer);
    data.flags = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ageC]
    tmp = _deserializer.uint16(buffer);
    data.ageC = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [prc]
    tmp = _deserializer.float32(buffer);
    data.prc = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [prrc]
    tmp = _deserializer.float32(buffer);
    data.prrc = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ublox_msgs/NavDGPS_SV';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '68b7faf0392ad4a362842f0abbad57cb';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # see message NavDGPS
    
    uint8 svid              # Satellite ID
    
    uint8 flags             # Bitmask / Channel Number
    uint8 CHANNEL1 = 1
    uint8 CHANNEL2 = 2
    uint8 CHANNEL3 = 3
    uint8 CHANNEL4 = 4
    uint8 CHANNEL5 = 5
    uint8 CHANNEL6 = 6
    uint8 CHANNEL7 = 7
    uint8 CHANNEL8 = 8
    uint8 DGPS = 16
    
    uint16 ageC             # Age of latest correction data [ms]
    float32 prc             # Pseudo Range Correction [m]
    float32 prrc            # Pseudo Range Rate Correction [m/s]
    
    
    `;
  }

};

// Constants for message
NavDGPS_SV.Constants = {
  CHANNEL1: 1,
  CHANNEL2: 2,
  CHANNEL3: 3,
  CHANNEL4: 4,
  CHANNEL5: 5,
  CHANNEL6: 6,
  CHANNEL7: 7,
  CHANNEL8: 8,
  DGPS: 16,
}

module.exports = NavDGPS_SV;
