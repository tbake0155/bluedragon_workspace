// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let NavDGPS_SV = require('./NavDGPS_SV.js');

//-----------------------------------------------------------

class NavDGPS {
  constructor() {
    this.iTOW = 0;
    this.age = 0;
    this.baseId = 0;
    this.baseHealth = 0;
    this.numCh = 0;
    this.status = 0;
    this.reserved1 = 0;
    this.sv = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type NavDGPS
    // Serialize message field [iTOW]
    bufferInfo = _serializer.uint32(obj.iTOW, bufferInfo);
    // Serialize message field [age]
    bufferInfo = _serializer.int32(obj.age, bufferInfo);
    // Serialize message field [baseId]
    bufferInfo = _serializer.int16(obj.baseId, bufferInfo);
    // Serialize message field [baseHealth]
    bufferInfo = _serializer.int16(obj.baseHealth, bufferInfo);
    // Serialize message field [numCh]
    bufferInfo = _serializer.int8(obj.numCh, bufferInfo);
    // Serialize message field [status]
    bufferInfo = _serializer.uint8(obj.status, bufferInfo);
    // Serialize message field [reserved1]
    bufferInfo = _serializer.uint16(obj.reserved1, bufferInfo);
    // Serialize the length for message field [sv]
    bufferInfo = _serializer.uint32(obj.sv.length, bufferInfo);
    // Serialize message field [sv]
    obj.sv.forEach((val) => {
      bufferInfo = NavDGPS_SV.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type NavDGPS
    let tmp;
    let len;
    let data = new NavDGPS();
    // Deserialize message field [iTOW]
    tmp = _deserializer.uint32(buffer);
    data.iTOW = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [age]
    tmp = _deserializer.int32(buffer);
    data.age = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [baseId]
    tmp = _deserializer.int16(buffer);
    data.baseId = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [baseHealth]
    tmp = _deserializer.int16(buffer);
    data.baseHealth = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [numCh]
    tmp = _deserializer.int8(buffer);
    data.numCh = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [status]
    tmp = _deserializer.uint8(buffer);
    data.status = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reserved1]
    tmp = _deserializer.uint16(buffer);
    data.reserved1 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [sv]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [sv]
    data.sv = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = NavDGPS_SV.deserialize(buffer);
      data.sv[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ublox_msgs/NavDGPS';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b0aba8454084620f2a8eb7ff6445368c';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # NAV-DGPS (0x01 0x31)
    # DGPS Data Used for NAV
    #
    # This message outputs the Correction data as it has been applied to the current NAV
    # Solution. See also the notes on the RTCM protocol.
    #
    
    uint8 CLASS_ID = 1
    uint8 MESSAGE_ID = 31
    
    uint32 iTOW             # GPS Millisecond time of week [ms]
    
    int32 age               # Age of newest correction data [ms]
    int16 baseId            # DGPS Base Station ID
    int16 baseHealth        # DGPS Base Station Health Status
    int8 numCh              # Number of channels for which correction data is following
    
    uint8 status            # DGPS Correction Type Status
    uint8 DGPS_CORRECTION_NONE = 0
    uint8 DGPS_CORRECTION_PR_PRR = 1
    
    uint16 reserved1        # Reserved
    
    NavDGPS_SV[] sv
    
    ================================================================================
    MSG: ublox_msgs/NavDGPS_SV
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
NavDGPS.Constants = {
  CLASS_ID: 1,
  MESSAGE_ID: 31,
  DGPS_CORRECTION_NONE: 0,
  DGPS_CORRECTION_PR_PRR: 1,
}

module.exports = NavDGPS;
