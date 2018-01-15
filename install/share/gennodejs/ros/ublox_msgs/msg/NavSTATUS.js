// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class NavSTATUS {
  constructor() {
    this.iTOW = 0;
    this.gpsFix = 0;
    this.flags = 0;
    this.fixStat = 0;
    this.flags2 = 0;
    this.ttff = 0;
    this.msss = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type NavSTATUS
    // Serialize message field [iTOW]
    bufferInfo = _serializer.uint32(obj.iTOW, bufferInfo);
    // Serialize message field [gpsFix]
    bufferInfo = _serializer.uint8(obj.gpsFix, bufferInfo);
    // Serialize message field [flags]
    bufferInfo = _serializer.uint8(obj.flags, bufferInfo);
    // Serialize message field [fixStat]
    bufferInfo = _serializer.uint8(obj.fixStat, bufferInfo);
    // Serialize message field [flags2]
    bufferInfo = _serializer.uint8(obj.flags2, bufferInfo);
    // Serialize message field [ttff]
    bufferInfo = _serializer.uint32(obj.ttff, bufferInfo);
    // Serialize message field [msss]
    bufferInfo = _serializer.uint32(obj.msss, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type NavSTATUS
    let tmp;
    let len;
    let data = new NavSTATUS();
    // Deserialize message field [iTOW]
    tmp = _deserializer.uint32(buffer);
    data.iTOW = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [gpsFix]
    tmp = _deserializer.uint8(buffer);
    data.gpsFix = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [flags]
    tmp = _deserializer.uint8(buffer);
    data.flags = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [fixStat]
    tmp = _deserializer.uint8(buffer);
    data.fixStat = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [flags2]
    tmp = _deserializer.uint8(buffer);
    data.flags2 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ttff]
    tmp = _deserializer.uint32(buffer);
    data.ttff = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [msss]
    tmp = _deserializer.uint32(buffer);
    data.msss = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ublox_msgs/NavSTATUS';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c59712aa2e07ac37df60d9b92f97d104';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # NAV-STATUS (0x01 0x03)
    # Receiver Navigation Status
    #
    # See important comments concerning validity of position and velocity given in
    # section Navigation Output Filters.
    #
    
    uint8 CLASS_ID = 1
    uint8 MESSAGE_ID = 3
    
    uint32 iTOW             # GPS Millisecond time of week [ms]
    
    uint8 gpsFix            # GPSfix Type, range 0..5
    uint8 GPS_NO_FIX = 0
    uint8 GPS_DEAD_RECKONING_ONLY = 1
    uint8 GPS_2D_FIX = 2
    uint8 GPS_3D_FIX = 3
    uint8 GPS_GPS_DEAD_RECKONING_COMBINED = 4
    uint8 GPS_TIME_ONLY_FIX = 6
    
    uint8 flags             # Navigation Status Flags
    uint8 FLAGS_GPSFIXOK = 1      # i.e. within DOP & ACC Masks
    uint8 FLAGS_DIFFSOLN = 2      # DGPS used
    uint8 FLAGS_WKNSET = 4        # Week Number valid
    uint8 FLAGS_TOWSET = 8        # Time of Week valid
    
    uint8 fixStat           # Fix Status Information
    # DGPS Input Status:
    uint8 DGPSISTAT_MASK = 1
    uint8 DGPSISTAT_NONE = 0        # none
    uint8 DGPSISTAT_PR_PRR = 1      # PR+PRR Correction
    # map matching status:
    uint8 MAPMATCHING_MASK = 192
    uint8 MAPMATCHING_NONE = 0      # none
    uint8 MAPMATCHING_VALID = 64    # valid, i.e. map matching data was received, but was too old
    uint8 MAPMATCHING_USED = 128    # used, map matching data was applied
    uint8 MAPMATCHING_DR = 192      # DR, map matching was the reason to enable the dead reckoning gpsFix type instead of publishing no fix
    
    uint8 flags2            # further information about navigation output
    # power safe mode state (Only for FW version >= 7.01; undefined otherwise)
    uint8 PSMSTATE_ACQUISITION = 0                # ACQUISITION [or when psm disabled]
    uint8 PSMSTATE_TRACKING = 1                   # TRACKING
    uint8 PSMSTATE_POWER_OPTIMIZED_TRACKING = 2   # POWER OPTIMIZED TRACKING
    uint8 PSMSTATE_INACTIVE = 3                   # INACTIVE
    
    uint32 ttff             # Time to first fix (millisecond time tag)
    uint32 msss             # Milliseconds since Startup / Reset
    
    `;
  }

};

// Constants for message
NavSTATUS.Constants = {
  CLASS_ID: 1,
  MESSAGE_ID: 3,
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
  DGPSISTAT_MASK: 1,
  DGPSISTAT_NONE: 0,
  DGPSISTAT_PR_PRR: 1,
  MAPMATCHING_MASK: 192,
  MAPMATCHING_NONE: 0,
  MAPMATCHING_VALID: 64,
  MAPMATCHING_USED: 128,
  MAPMATCHING_DR: 192,
  PSMSTATE_ACQUISITION: 0,
  PSMSTATE_TRACKING: 1,
  PSMSTATE_POWER_OPTIMIZED_TRACKING: 2,
  PSMSTATE_INACTIVE: 3,
}

module.exports = NavSTATUS;
