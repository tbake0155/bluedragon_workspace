// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let NavSBAS_SV = require('./NavSBAS_SV.js');

//-----------------------------------------------------------

class NavSBAS {
  constructor() {
    this.iTOW = 0;
    this.geo = 0;
    this.mode = 0;
    this.sys = 0;
    this.service = 0;
    this.cnt = 0;
    this.reserved0 = new Array(3).fill(0);
    this.sv = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type NavSBAS
    // Serialize message field [iTOW]
    bufferInfo = _serializer.uint32(obj.iTOW, bufferInfo);
    // Serialize message field [geo]
    bufferInfo = _serializer.uint8(obj.geo, bufferInfo);
    // Serialize message field [mode]
    bufferInfo = _serializer.uint8(obj.mode, bufferInfo);
    // Serialize message field [sys]
    bufferInfo = _serializer.int8(obj.sys, bufferInfo);
    // Serialize message field [service]
    bufferInfo = _serializer.uint8(obj.service, bufferInfo);
    // Serialize message field [cnt]
    bufferInfo = _serializer.uint8(obj.cnt, bufferInfo);
    // Serialize message field [reserved0]
    bufferInfo.buffer.push(obj.reserved0);
    bufferInfo.length += obj.reserved0.length;
    // Serialize the length for message field [sv]
    bufferInfo = _serializer.uint32(obj.sv.length, bufferInfo);
    // Serialize message field [sv]
    obj.sv.forEach((val) => {
      bufferInfo = NavSBAS_SV.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type NavSBAS
    let tmp;
    let len;
    let data = new NavSBAS();
    // Deserialize message field [iTOW]
    tmp = _deserializer.uint32(buffer);
    data.iTOW = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [geo]
    tmp = _deserializer.uint8(buffer);
    data.geo = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [mode]
    tmp = _deserializer.uint8(buffer);
    data.mode = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [sys]
    tmp = _deserializer.int8(buffer);
    data.sys = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [service]
    tmp = _deserializer.uint8(buffer);
    data.service = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [cnt]
    tmp = _deserializer.uint8(buffer);
    data.cnt = tmp.data;
    buffer = tmp.buffer;
    len = 3;
    // Deserialize message field [reserved0]
    data.reserved0 = buffer.slice(0, len);
    buffer =  buffer.slice(len);
    // Deserialize array length for message field [sv]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [sv]
    data.sv = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = NavSBAS_SV.deserialize(buffer);
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
    return 'ublox_msgs/NavSBAS';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ef6bea20644abf57a149084ba2380e8c';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # NAV-SBAS (0x01 0x32)
    # SBAS Status Data
    #
    # This message outputs the status of the SBAS sub system
    #
    
    uint8 CLASS_ID = 1
    uint8 MESSAGE_ID = 50
    
    uint32 iTOW             # GPS Millisecond time of week [ms]
    
    uint8 geo               # PRN Number of the GEO where correction and integrity data is used from
    
    uint8 mode              # SBAS Mode
    uint8 MODE_DISABLED = 0
    uint8 MODE_ENABLED_INTEGRITY = 1
    uint8 MODE_ENABLED_TESTMODE = 3
    
    int8 sys                # SBAS System (WAAS/EGNOS/...)
    int8 SYS_UNKNOWN = -1
    int8 SYS_WAAS = 0
    int8 SYS_EGNOS = 1
    int8 SYS_MSAS = 2
    int8 SYS_GPS = 16
    
    uint8 service           # SBAS Services available
    uint8 SERVICE_RANGING = 1
    uint8 SERVICE_CORRECTIONS = 2
    uint8 SERVICE_INTEGRITY = 4
    uint8 SERVICE_TESTMODE = 8
    
    uint8 cnt               # Number of SV data following
    uint8[3] reserved0      # Reserved
    
    NavSBAS_SV[] sv
    
    ================================================================================
    MSG: ublox_msgs/NavSBAS_SV
    # see message NavSBAS
    #
    
    uint8 svid              # SV Id
    uint8 flags             # Flags for this SV
    uint8 udre              # Monitoring status
    uint8 svSys             # System (WAAS/EGNOS/...), same as SYS
    uint8 svService         # Services available, same as SERVICE
    uint8 reserved1         # Reserved
    int16 prc               # Pseudo Range correction in [cm]
    uint16 reserved2        # Reserved
    int16 ic                # Ionosphere correction in [cm]
    
    `;
  }

};

// Constants for message
NavSBAS.Constants = {
  CLASS_ID: 1,
  MESSAGE_ID: 50,
  MODE_DISABLED: 0,
  MODE_ENABLED_INTEGRITY: 1,
  MODE_ENABLED_TESTMODE: 3,
  SYS_UNKNOWN: -1,
  SYS_WAAS: 0,
  SYS_EGNOS: 1,
  SYS_MSAS: 2,
  SYS_GPS: 16,
  SERVICE_RANGING: 1,
  SERVICE_CORRECTIONS: 2,
  SERVICE_INTEGRITY: 4,
  SERVICE_TESTMODE: 8,
}

module.exports = NavSBAS;
