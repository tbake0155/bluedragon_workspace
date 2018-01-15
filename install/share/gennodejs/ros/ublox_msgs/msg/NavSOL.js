// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class NavSOL {
  constructor() {
    this.iTOW = 0;
    this.fTOW = 0;
    this.week = 0;
    this.gpsFix = 0;
    this.flags = 0;
    this.ecefX = 0;
    this.ecefY = 0;
    this.ecefZ = 0;
    this.pAcc = 0;
    this.ecefVX = 0;
    this.ecefVY = 0;
    this.ecefVZ = 0;
    this.sAcc = 0;
    this.pDOP = 0;
    this.reserved1 = 0;
    this.numSV = 0;
    this.reserved2 = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type NavSOL
    // Serialize message field [iTOW]
    bufferInfo = _serializer.uint32(obj.iTOW, bufferInfo);
    // Serialize message field [fTOW]
    bufferInfo = _serializer.int32(obj.fTOW, bufferInfo);
    // Serialize message field [week]
    bufferInfo = _serializer.int16(obj.week, bufferInfo);
    // Serialize message field [gpsFix]
    bufferInfo = _serializer.uint8(obj.gpsFix, bufferInfo);
    // Serialize message field [flags]
    bufferInfo = _serializer.uint8(obj.flags, bufferInfo);
    // Serialize message field [ecefX]
    bufferInfo = _serializer.int32(obj.ecefX, bufferInfo);
    // Serialize message field [ecefY]
    bufferInfo = _serializer.int32(obj.ecefY, bufferInfo);
    // Serialize message field [ecefZ]
    bufferInfo = _serializer.int32(obj.ecefZ, bufferInfo);
    // Serialize message field [pAcc]
    bufferInfo = _serializer.uint32(obj.pAcc, bufferInfo);
    // Serialize message field [ecefVX]
    bufferInfo = _serializer.int32(obj.ecefVX, bufferInfo);
    // Serialize message field [ecefVY]
    bufferInfo = _serializer.int32(obj.ecefVY, bufferInfo);
    // Serialize message field [ecefVZ]
    bufferInfo = _serializer.int32(obj.ecefVZ, bufferInfo);
    // Serialize message field [sAcc]
    bufferInfo = _serializer.uint32(obj.sAcc, bufferInfo);
    // Serialize message field [pDOP]
    bufferInfo = _serializer.uint16(obj.pDOP, bufferInfo);
    // Serialize message field [reserved1]
    bufferInfo = _serializer.uint8(obj.reserved1, bufferInfo);
    // Serialize message field [numSV]
    bufferInfo = _serializer.uint8(obj.numSV, bufferInfo);
    // Serialize message field [reserved2]
    bufferInfo = _serializer.uint32(obj.reserved2, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type NavSOL
    let tmp;
    let len;
    let data = new NavSOL();
    // Deserialize message field [iTOW]
    tmp = _deserializer.uint32(buffer);
    data.iTOW = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [fTOW]
    tmp = _deserializer.int32(buffer);
    data.fTOW = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [week]
    tmp = _deserializer.int16(buffer);
    data.week = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [gpsFix]
    tmp = _deserializer.uint8(buffer);
    data.gpsFix = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [flags]
    tmp = _deserializer.uint8(buffer);
    data.flags = tmp.data;
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
    // Deserialize message field [pDOP]
    tmp = _deserializer.uint16(buffer);
    data.pDOP = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reserved1]
    tmp = _deserializer.uint8(buffer);
    data.reserved1 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [numSV]
    tmp = _deserializer.uint8(buffer);
    data.numSV = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reserved2]
    tmp = _deserializer.uint32(buffer);
    data.reserved2 = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ublox_msgs/NavSOL';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '1cf640142041f69c0d0e9f5d8a03729e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # NAV-SOL (0x01 0x06)
    # Navigation Solution Information
    #
    # This message combines Position, velocity and time solution in ECEF, including accuracy
    # figures
    #
    
    uint8 CLASS_ID = 1
    uint8 MESSAGE_ID = 6
    
    uint32 iTOW             # GPS Millisecond time of week [ms]
    int32 fTOW              # Fractional Nanoseconds remainder of rounded
                            # ms above, range -500000 .. 500000 [ns]
    int16 week              # GPS week (GPS time)
    
    uint8 gpsFix            # GPSfix Type, range 0..5
    uint8 GPS_NO_FIX = 0
    uint8 GPS_DEAD_RECKONING_ONLY = 1
    uint8 GPS_2D_FIX = 2
    uint8 GPS_3D_FIX = 3
    uint8 GPS_GPS_DEAD_RECKONING_COMBINED = 4
    uint8 GPS_TIME_ONLY_FIX = 6
    
    uint8 flags             # Fix Status Flags
    uint8 FLAGS_GPSFIXOK = 1      # i.e. within DOP & ACC Masks
    uint8 FLAGS_DIFFSOLN = 2      # DGPS used
    uint8 FLAGS_WKNSET = 4        # Week Number valid
    uint8 FLAGS_TOWSET = 8        # Time of Week valid
    
    int32 ecefX             # ECEF X coordinate [cm]
    int32 ecefY             # ECEF Y coordinate [cm]
    int32 ecefZ             # ECEF Z coordinate [cm]
    uint32 pAcc             # 3D Position Accuracy Estimate [cm]
    int32 ecefVX            # ECEF X velocity [cm/s]
    int32 ecefVY            # ECEF Y velocity [cm/s]
    int32 ecefVZ            # ECEF Z velocity [cm/s]
    uint32 sAcc             # Speed Accuracy Estimate [cm/s]
    uint16 pDOP             # Position DOP [cm]
    uint8 reserved1         # Reserved
    uint8 numSV             # Number of SVs used in Nav Solution
    uint32 reserved2        # Reserved
    
    `;
  }

};

// Constants for message
NavSOL.Constants = {
  CLASS_ID: 1,
  MESSAGE_ID: 6,
  GPS_NO_FIX: 0,
  GPS_DEAD_RECKONING_ONLY: 1,
  GPS_2D_FIX: 2,
  GPS_3D_FIX: 3,
  GPS_GPS_DEAD_RECKONING_COMBINED: 4,
  GPS_TIME_ONLY_FIX: 6,
  FLAGS_GPSFIXOK: 1,
  FLAGS_DIFFSOLN: 2,
  FLAGS_WKNSET: 4,
  FLAGS_TOWSET: 8,
}

module.exports = NavSOL;
