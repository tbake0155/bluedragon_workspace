// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class NavSVINFO_SV {
  constructor() {
    this.chn = 0;
    this.svid = 0;
    this.flags = 0;
    this.quality = 0;
    this.cno = 0;
    this.elev = 0;
    this.azim = 0;
    this.prRes = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type NavSVINFO_SV
    // Serialize message field [chn]
    bufferInfo = _serializer.uint8(obj.chn, bufferInfo);
    // Serialize message field [svid]
    bufferInfo = _serializer.uint8(obj.svid, bufferInfo);
    // Serialize message field [flags]
    bufferInfo = _serializer.uint8(obj.flags, bufferInfo);
    // Serialize message field [quality]
    bufferInfo = _serializer.uint8(obj.quality, bufferInfo);
    // Serialize message field [cno]
    bufferInfo = _serializer.uint8(obj.cno, bufferInfo);
    // Serialize message field [elev]
    bufferInfo = _serializer.int8(obj.elev, bufferInfo);
    // Serialize message field [azim]
    bufferInfo = _serializer.int16(obj.azim, bufferInfo);
    // Serialize message field [prRes]
    bufferInfo = _serializer.int32(obj.prRes, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type NavSVINFO_SV
    let tmp;
    let len;
    let data = new NavSVINFO_SV();
    // Deserialize message field [chn]
    tmp = _deserializer.uint8(buffer);
    data.chn = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [svid]
    tmp = _deserializer.uint8(buffer);
    data.svid = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [flags]
    tmp = _deserializer.uint8(buffer);
    data.flags = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [quality]
    tmp = _deserializer.uint8(buffer);
    data.quality = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [cno]
    tmp = _deserializer.uint8(buffer);
    data.cno = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [elev]
    tmp = _deserializer.int8(buffer);
    data.elev = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [azim]
    tmp = _deserializer.int16(buffer);
    data.azim = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [prRes]
    tmp = _deserializer.int32(buffer);
    data.prRes = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ublox_msgs/NavSVINFO_SV';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b29c45854d86b34347aac679c246b6c7';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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
NavSVINFO_SV.Constants = {
  FLAGS_SVUSED: 1,
  FLAGS_DIFFCORR: 2,
  FLAGS_ORBITAVAIL: 4,
  FLAGS_ORBITEPH: 8,
  FLAGS_UNHEALTHY: 16,
  FLAGS_ORBIT_ALM: 32,
  FLAGS_ORBIT_AOP: 64,
  FLAGS_SMOOTHED: 128,
  QUALITY_IDLE: 0,
  QUALITY_SEARCHING: 1,
  QUALITY_AQUIRED: 2,
  QUALITY_DETECTED: 3,
  QUALITY_CODE_LOCK: 4,
  QUALITY_CODE_AND_CARRIER_LOCKED1: 5,
  QUALITY_CODE_AND_CARRIER_LOCKED2: 6,
  QUALITY_CODE_AND_CARRIER_LOCKED3: 7,
}

module.exports = NavSVINFO_SV;
