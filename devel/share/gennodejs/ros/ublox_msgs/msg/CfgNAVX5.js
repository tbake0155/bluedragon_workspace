// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class CfgNAVX5 {
  constructor() {
    this.version = 0;
    this.mask1 = 0;
    this.reserved0 = 0;
    this.reserved1 = 0;
    this.reserved2 = 0;
    this.minSVs = 0;
    this.maxSVs = 0;
    this.minCNO = 0;
    this.reserved5 = 0;
    this.iniFix3D = 0;
    this.reserved6 = 0;
    this.reserved7 = 0;
    this.ackAiding = 0;
    this.wknRollover = 0;
    this.reserved8 = 0;
    this.reserved9 = 0;
    this.reserved10 = 0;
    this.usePPP = 0;
    this.aopCfg = 0;
    this.reserved11 = 0;
    this.reserved12 = 0;
    this.aopOrbMaxErr = 0;
    this.reserved13 = 0;
    this.reserved14 = 0;
    this.reserved3 = 0;
    this.reserved4 = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type CfgNAVX5
    // Serialize message field [version]
    bufferInfo = _serializer.uint16(obj.version, bufferInfo);
    // Serialize message field [mask1]
    bufferInfo = _serializer.uint16(obj.mask1, bufferInfo);
    // Serialize message field [reserved0]
    bufferInfo = _serializer.uint32(obj.reserved0, bufferInfo);
    // Serialize message field [reserved1]
    bufferInfo = _serializer.uint8(obj.reserved1, bufferInfo);
    // Serialize message field [reserved2]
    bufferInfo = _serializer.uint8(obj.reserved2, bufferInfo);
    // Serialize message field [minSVs]
    bufferInfo = _serializer.uint8(obj.minSVs, bufferInfo);
    // Serialize message field [maxSVs]
    bufferInfo = _serializer.uint8(obj.maxSVs, bufferInfo);
    // Serialize message field [minCNO]
    bufferInfo = _serializer.uint8(obj.minCNO, bufferInfo);
    // Serialize message field [reserved5]
    bufferInfo = _serializer.uint8(obj.reserved5, bufferInfo);
    // Serialize message field [iniFix3D]
    bufferInfo = _serializer.uint8(obj.iniFix3D, bufferInfo);
    // Serialize message field [reserved6]
    bufferInfo = _serializer.uint8(obj.reserved6, bufferInfo);
    // Serialize message field [reserved7]
    bufferInfo = _serializer.uint8(obj.reserved7, bufferInfo);
    // Serialize message field [ackAiding]
    bufferInfo = _serializer.uint8(obj.ackAiding, bufferInfo);
    // Serialize message field [wknRollover]
    bufferInfo = _serializer.uint16(obj.wknRollover, bufferInfo);
    // Serialize message field [reserved8]
    bufferInfo = _serializer.uint32(obj.reserved8, bufferInfo);
    // Serialize message field [reserved9]
    bufferInfo = _serializer.uint8(obj.reserved9, bufferInfo);
    // Serialize message field [reserved10]
    bufferInfo = _serializer.uint8(obj.reserved10, bufferInfo);
    // Serialize message field [usePPP]
    bufferInfo = _serializer.uint8(obj.usePPP, bufferInfo);
    // Serialize message field [aopCfg]
    bufferInfo = _serializer.uint8(obj.aopCfg, bufferInfo);
    // Serialize message field [reserved11]
    bufferInfo = _serializer.uint8(obj.reserved11, bufferInfo);
    // Serialize message field [reserved12]
    bufferInfo = _serializer.uint8(obj.reserved12, bufferInfo);
    // Serialize message field [aopOrbMaxErr]
    bufferInfo = _serializer.uint16(obj.aopOrbMaxErr, bufferInfo);
    // Serialize message field [reserved13]
    bufferInfo = _serializer.uint8(obj.reserved13, bufferInfo);
    // Serialize message field [reserved14]
    bufferInfo = _serializer.uint8(obj.reserved14, bufferInfo);
    // Serialize message field [reserved3]
    bufferInfo = _serializer.uint16(obj.reserved3, bufferInfo);
    // Serialize message field [reserved4]
    bufferInfo = _serializer.uint32(obj.reserved4, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type CfgNAVX5
    let tmp;
    let len;
    let data = new CfgNAVX5();
    // Deserialize message field [version]
    tmp = _deserializer.uint16(buffer);
    data.version = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [mask1]
    tmp = _deserializer.uint16(buffer);
    data.mask1 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reserved0]
    tmp = _deserializer.uint32(buffer);
    data.reserved0 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reserved1]
    tmp = _deserializer.uint8(buffer);
    data.reserved1 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reserved2]
    tmp = _deserializer.uint8(buffer);
    data.reserved2 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [minSVs]
    tmp = _deserializer.uint8(buffer);
    data.minSVs = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [maxSVs]
    tmp = _deserializer.uint8(buffer);
    data.maxSVs = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [minCNO]
    tmp = _deserializer.uint8(buffer);
    data.minCNO = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reserved5]
    tmp = _deserializer.uint8(buffer);
    data.reserved5 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [iniFix3D]
    tmp = _deserializer.uint8(buffer);
    data.iniFix3D = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reserved6]
    tmp = _deserializer.uint8(buffer);
    data.reserved6 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reserved7]
    tmp = _deserializer.uint8(buffer);
    data.reserved7 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ackAiding]
    tmp = _deserializer.uint8(buffer);
    data.ackAiding = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [wknRollover]
    tmp = _deserializer.uint16(buffer);
    data.wknRollover = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reserved8]
    tmp = _deserializer.uint32(buffer);
    data.reserved8 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reserved9]
    tmp = _deserializer.uint8(buffer);
    data.reserved9 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reserved10]
    tmp = _deserializer.uint8(buffer);
    data.reserved10 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [usePPP]
    tmp = _deserializer.uint8(buffer);
    data.usePPP = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [aopCfg]
    tmp = _deserializer.uint8(buffer);
    data.aopCfg = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reserved11]
    tmp = _deserializer.uint8(buffer);
    data.reserved11 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reserved12]
    tmp = _deserializer.uint8(buffer);
    data.reserved12 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [aopOrbMaxErr]
    tmp = _deserializer.uint16(buffer);
    data.aopOrbMaxErr = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reserved13]
    tmp = _deserializer.uint8(buffer);
    data.reserved13 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reserved14]
    tmp = _deserializer.uint8(buffer);
    data.reserved14 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reserved3]
    tmp = _deserializer.uint16(buffer);
    data.reserved3 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reserved4]
    tmp = _deserializer.uint32(buffer);
    data.reserved4 = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ublox_msgs/CfgNAVX5';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '51508a96b05799aa4924b225bcb10fb3';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # CFG-NAVX5 (0x06 0x24)
    # Navigation Engine Expert Settings
    # Warning: Refer to u-blox protocol spec before changing these settings.
    
    uint8 CLASS_ID = 6
    uint8 MESSAGE_ID = 35
    
    uint16 version        # Message version (set to 0)
    
    uint16 mask1          # First parameters bitmask (possible values below)
    uint16 MASK_MIN_MAX        = 4
    uint16 MASK_MIN_CNO        = 8
    uint16 MASK_INITIAL_FIX_3D = 64
    uint16 MASK_WKN_ROLL       = 512
    uint16 MASK_PPP            = 8192
    uint16 MASK_AOP            = 16384
    
    uint32 reserved0      # Always set to zero
    uint8 reserved1       # Always set to zero
    uint8 reserved2       # Always set to zero
    
    uint8 minSVs          # Minimum number of satellites for navigation
    uint8 maxSVs          # Maximum number of satellites for navigation
    uint8 minCNO          # Minimum satellite signal level for navigation
    
    uint8 reserved5       # Always set to zero
    
    uint8 iniFix3D        # If set to 1, initial fix must be 3D
    
    uint8 reserved6       # Always set to zero
    uint8 reserved7       # Always set to zero
    
    uint8 ackAiding       # If set to 1, issue acknowledgements for assistance
    uint16 wknRollover    # GPS rollover number
    
    uint32 reserved8      # Always set to zero
    uint8 reserved9       # Always set to zero
    uint8 reserved10      # Always set to zero
    
    uint8 usePPP          # Enable/disable PPP (on supported units)
    uint8 aopCfg          # AssistNow Autonomous configuration
    
    uint8 reserved11      # Always set to zero
    uint8 reserved12      # Always set to zero
    
    uint16 aopOrbMaxErr   # Maximum acceptable (modelled) autonomous orbit error
    
    uint8 reserved13      # Always set to zero
    uint8 reserved14      # Always set to zero
    uint16 reserved3      # Always set to zero
    uint32 reserved4      # Always set to zero
    
    `;
  }

};

// Constants for message
CfgNAVX5.Constants = {
  CLASS_ID: 6,
  MESSAGE_ID: 35,
  MASK_MIN_MAX: 4,
  MASK_MIN_CNO: 8,
  MASK_INITIAL_FIX_3D: 64,
  MASK_WKN_ROLL: 512,
  MASK_PPP: 8192,
  MASK_AOP: 16384,
}

module.exports = CfgNAVX5;
