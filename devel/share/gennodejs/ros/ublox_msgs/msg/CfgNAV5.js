// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class CfgNAV5 {
  constructor() {
    this.mask = 0;
    this.dynModel = 0;
    this.fixMode = 0;
    this.fixedAlt = 0;
    this.fixedAltVar = 0;
    this.minElev = 0;
    this.drLimit = 0;
    this.pDop = 0;
    this.tDop = 0;
    this.pAcc = 0;
    this.tAcc = 0;
    this.staticHoldThresh = 0;
    this.dgpsTimeOut = 0;
    this.reserved2 = 0;
    this.reserved3 = 0;
    this.reserved4 = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type CfgNAV5
    // Serialize message field [mask]
    bufferInfo = _serializer.uint16(obj.mask, bufferInfo);
    // Serialize message field [dynModel]
    bufferInfo = _serializer.uint8(obj.dynModel, bufferInfo);
    // Serialize message field [fixMode]
    bufferInfo = _serializer.uint8(obj.fixMode, bufferInfo);
    // Serialize message field [fixedAlt]
    bufferInfo = _serializer.int32(obj.fixedAlt, bufferInfo);
    // Serialize message field [fixedAltVar]
    bufferInfo = _serializer.uint32(obj.fixedAltVar, bufferInfo);
    // Serialize message field [minElev]
    bufferInfo = _serializer.int8(obj.minElev, bufferInfo);
    // Serialize message field [drLimit]
    bufferInfo = _serializer.uint8(obj.drLimit, bufferInfo);
    // Serialize message field [pDop]
    bufferInfo = _serializer.uint16(obj.pDop, bufferInfo);
    // Serialize message field [tDop]
    bufferInfo = _serializer.uint16(obj.tDop, bufferInfo);
    // Serialize message field [pAcc]
    bufferInfo = _serializer.uint16(obj.pAcc, bufferInfo);
    // Serialize message field [tAcc]
    bufferInfo = _serializer.uint16(obj.tAcc, bufferInfo);
    // Serialize message field [staticHoldThresh]
    bufferInfo = _serializer.uint8(obj.staticHoldThresh, bufferInfo);
    // Serialize message field [dgpsTimeOut]
    bufferInfo = _serializer.uint8(obj.dgpsTimeOut, bufferInfo);
    // Serialize message field [reserved2]
    bufferInfo = _serializer.uint32(obj.reserved2, bufferInfo);
    // Serialize message field [reserved3]
    bufferInfo = _serializer.uint32(obj.reserved3, bufferInfo);
    // Serialize message field [reserved4]
    bufferInfo = _serializer.uint32(obj.reserved4, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type CfgNAV5
    let tmp;
    let len;
    let data = new CfgNAV5();
    // Deserialize message field [mask]
    tmp = _deserializer.uint16(buffer);
    data.mask = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [dynModel]
    tmp = _deserializer.uint8(buffer);
    data.dynModel = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [fixMode]
    tmp = _deserializer.uint8(buffer);
    data.fixMode = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [fixedAlt]
    tmp = _deserializer.int32(buffer);
    data.fixedAlt = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [fixedAltVar]
    tmp = _deserializer.uint32(buffer);
    data.fixedAltVar = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [minElev]
    tmp = _deserializer.int8(buffer);
    data.minElev = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [drLimit]
    tmp = _deserializer.uint8(buffer);
    data.drLimit = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [pDop]
    tmp = _deserializer.uint16(buffer);
    data.pDop = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [tDop]
    tmp = _deserializer.uint16(buffer);
    data.tDop = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [pAcc]
    tmp = _deserializer.uint16(buffer);
    data.pAcc = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [tAcc]
    tmp = _deserializer.uint16(buffer);
    data.tAcc = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [staticHoldThresh]
    tmp = _deserializer.uint8(buffer);
    data.staticHoldThresh = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [dgpsTimeOut]
    tmp = _deserializer.uint8(buffer);
    data.dgpsTimeOut = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reserved2]
    tmp = _deserializer.uint32(buffer);
    data.reserved2 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reserved3]
    tmp = _deserializer.uint32(buffer);
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
    return 'ublox_msgs/CfgNAV5';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '7c6e2419d1dd6532b8f09e39a02e167c';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # CFG-NAV5 (0x06 0x24)
    # Navigation Engine Settings
    #
    
    uint8 CLASS_ID = 6
    uint8 MESSAGE_ID = 36
    
    uint16 mask             # Parameters Bitmask. Only the masked
                            # parameters will be applied.
    uint16 MASK_DYN = 1                 # Apply dynamic model settings
    uint16 MASK_MIN_EL = 2              # Apply minimum elevation settings
    uint16 MASK_FIX_MODE = 4            # Apply fix mode settings
    uint16 MASK_DR_LIM = 8              # Apply DR limit settings
    uint16 MASK_POS_MASK = 16           # Apply position mask settings
    uint16 MASK_TIME_MASK = 32          # Apply time mask settings
    uint16 MASK_STATIC_HOLD_MASK = 64   # Apply static hold settings
    uint16 MASK_DGPS_MASK = 128         # Apply DGPS settings, firmware 7 and newer only
    
    uint8 dynModel          # Dynamic Platform model:
    uint8 DYN_MODEL_PORTABLE = 0        # Portable
    uint8 DYN_MODEL_STATIONARY = 2      # Stationary
    uint8 DYN_MODEL_PEDESTRIAN = 3      # Pedestrian
    uint8 DYN_MODEL_AUTOMOTIVE = 4      # Automotive
    uint8 DYN_MODEL_SEA = 5             # Sea
    uint8 DYN_MODEL_AIRBORNE_1G = 6     # Airborne with <1g Acceleration
    uint8 DYN_MODEL_AIRBORNE_2G = 7     # Airborne with <2g Acceleration
    uint8 DYN_MODEL_AIRBORNE_4G = 8     # Airborne with <4g Acceleration
    
    uint8 fixMode           # Position Fixing Mode.
    uint8 FIX_MODE_2D_ONLY = 1          # 2D only
    uint8 FIX_MODE_3D_ONLY = 2          # 3D only
    uint8 FIX_MODE_AUTO = 3             # Auto 2D/3D
    
    int32 fixedAlt          # Fixed altitude (mean sea level) for 2D fix mode. [m / 0.01]
    uint32 fixedAltVar      # Fixed altitude variance for 2D mode. [m^2 / 0.0001]
    int8 minElev            # Minimum Elevation for a GNSS satellite to be used in NAV [deg]
    uint8 drLimit           # Maximum time to perform dead reckoning [s]
                            # (linear extrapolation) in case of GPS signal loss
    uint16 pDop             # Position DOP Mask to use [1 / 0.1]
    uint16 tDop             # Time DOP Mask to use [1 / 0.1]
    uint16 pAcc             # Position Accuracy Mask [m]
    uint16 tAcc             # Time Accuracy Mask [m]
    uint8 staticHoldThresh  # Static hold threshold [cm/s]
    uint8 dgpsTimeOut       # DGPS timeout, firmware 7 and newer only [s]
    uint32 reserved2        # Always set to zero
    uint32 reserved3        # Always set to zero
    uint32 reserved4        # Always set to zero
    
    `;
  }

};

// Constants for message
CfgNAV5.Constants = {
  CLASS_ID: 6,
  MESSAGE_ID: 36,
  MASK_DYN: 1,
  MASK_MIN_EL: 2,
  MASK_FIX_MODE: 4,
  MASK_DR_LIM: 8,
  MASK_POS_MASK: 16,
  MASK_TIME_MASK: 32,
  MASK_STATIC_HOLD_MASK: 64,
  MASK_DGPS_MASK: 128,
  DYN_MODEL_PORTABLE: 0,
  DYN_MODEL_STATIONARY: 2,
  DYN_MODEL_PEDESTRIAN: 3,
  DYN_MODEL_AUTOMOTIVE: 4,
  DYN_MODEL_SEA: 5,
  DYN_MODEL_AIRBORNE_1G: 6,
  DYN_MODEL_AIRBORNE_2G: 7,
  DYN_MODEL_AIRBORNE_4G: 8,
  FIX_MODE_2D_ONLY: 1,
  FIX_MODE_3D_ONLY: 2,
  FIX_MODE_AUTO: 3,
}

module.exports = CfgNAV5;
