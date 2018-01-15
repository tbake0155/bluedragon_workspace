// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let NavSVINFO_SV = require('./NavSVINFO_SV.js');

//-----------------------------------------------------------

class NavSVINFO {
  constructor() {
    this.iTOW = 0;
    this.numCh = 0;
    this.globalFlags = 0;
    this.reserved2 = 0;
    this.sv = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type NavSVINFO
    // Serialize message field [iTOW]
    bufferInfo = _serializer.uint32(obj.iTOW, bufferInfo);
    // Serialize message field [numCh]
    bufferInfo = _serializer.uint8(obj.numCh, bufferInfo);
    // Serialize message field [globalFlags]
    bufferInfo = _serializer.uint8(obj.globalFlags, bufferInfo);
    // Serialize message field [reserved2]
    bufferInfo = _serializer.uint16(obj.reserved2, bufferInfo);
    // Serialize the length for message field [sv]
    bufferInfo = _serializer.uint32(obj.sv.length, bufferInfo);
    // Serialize message field [sv]
    obj.sv.forEach((val) => {
      bufferInfo = NavSVINFO_SV.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type NavSVINFO
    let tmp;
    let len;
    let data = new NavSVINFO();
    // Deserialize message field [iTOW]
    tmp = _deserializer.uint32(buffer);
    data.iTOW = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [numCh]
    tmp = _deserializer.uint8(buffer);
    data.numCh = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [globalFlags]
    tmp = _deserializer.uint8(buffer);
    data.globalFlags = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reserved2]
    tmp = _deserializer.uint16(buffer);
    data.reserved2 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [sv]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [sv]
    data.sv = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = NavSVINFO_SV.deserialize(buffer);
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
    return 'ublox_msgs/NavSVINFO';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '92fe4aa48b81d4da7a58f2d2e63a7ca7';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # NAV-SVINFO (0x01 0x30)
    # Space Vehicle Information
    #
    
    uint8 CLASS_ID = 1
    uint8 MESSAGE_ID = 48
    
    uint32 iTOW             # GPS Millisecond time of week [ms]
    
    uint8 numCh             # Number of channels
    
    uint8 globalFlags       # Bitmask
    uint8 CHIPGEN_ANTARIS = 0   # Antaris, Antaris 4
    uint8 CHIPGEN_UBLOX5 = 1    # u-blox 5
    uint8 CHIPGEN_UBLOX6 = 2    # u-blox 6
    
    uint16 reserved2        # Reserved
    
    NavSVINFO_SV[] sv
    
    ================================================================================
    MSG: ublox_msgs/NavSVINFO_SV
    # see message NavSVINFO
    #
    
    uint8 chn             # Channel number, 255 for SVs not assigned to a channel
    uint8 svid            # Satellite ID
    
    uint8 flags           # Bitmask
    uint8 FLAGS_SVUSED = 1                      # SV is used for navigation
    uint8 FLAGS_DIFFCORR = 2                    # Differential correction data is available for this SV
    uint8 FLAGS_ORBITAVAIL = 4                  # Orbit information is available for this SV (Ephemeris or Almanach)
    uint8 FLAGS_ORBITEPH = 8                    # Orbit information is Ephemeris
    uint8 FLAGS_UNHEALTHY = 16                  # SV is unhealthy / shall not be used
    uint8 FLAGS_ORBIT_ALM = 32                  # Orbit information is Almanac Plus
    uint8 FLAGS_ORBIT_AOP = 64                  # Orbit information is AssistNow Autonomous
    uint8 FLAGS_SMOOTHED = 128                  # Carrier smoothed pseudorange used
    
    uint8 quality         # Bitfield
    # qualityInd: Signal Quality indicator (range 0..7). The following list shows the meaning of the different QI values:
    uint8 QUALITY_IDLE = 0                      # This channel is idle
    uint8 QUALITY_SEARCHING = 1                 # Channel is searching
    uint8 QUALITY_AQUIRED = 2                   # Signal aquired
    uint8 QUALITY_DETECTED = 3                  # Signal detected but unusable
    uint8 QUALITY_CODE_LOCK = 4                 # Code Lock on Signal
    uint8 QUALITY_CODE_AND_CARRIER_LOCKED1 = 5  # Code and Carrier locked
    uint8 QUALITY_CODE_AND_CARRIER_LOCKED2 = 6  # Code and Carrier locked
    uint8 QUALITY_CODE_AND_CARRIER_LOCKED3 = 7  # Code and Carrier locked
    
    uint8 cno             # Carrier to Noise Ratio (Signal Strength) [dbHz]
    int8 elev             # Elevation in integer degrees [deg]
    int16 azim            # Azimuth in integer degrees [deg]
    int32 prRes           # Pseudo range residual in centimetres [cm]
    
    `;
  }

};

// Constants for message
NavSVINFO.Constants = {
  CLASS_ID: 1,
  MESSAGE_ID: 48,
  CHIPGEN_ANTARIS: 0,
  CHIPGEN_UBLOX5: 1,
  CHIPGEN_UBLOX6: 2,
}

module.exports = NavSVINFO;
