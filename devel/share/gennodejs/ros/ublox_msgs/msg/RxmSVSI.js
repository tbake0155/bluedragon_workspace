// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let RxmSVSI_SV = require('./RxmSVSI_SV.js');

//-----------------------------------------------------------

class RxmSVSI {
  constructor() {
    this.iTOW = 0;
    this.week = 0;
    this.numVis = 0;
    this.numSV = 0;
    this.sv = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RxmSVSI
    // Serialize message field [iTOW]
    bufferInfo = _serializer.int32(obj.iTOW, bufferInfo);
    // Serialize message field [week]
    bufferInfo = _serializer.int16(obj.week, bufferInfo);
    // Serialize message field [numVis]
    bufferInfo = _serializer.uint8(obj.numVis, bufferInfo);
    // Serialize message field [numSV]
    bufferInfo = _serializer.uint8(obj.numSV, bufferInfo);
    // Serialize the length for message field [sv]
    bufferInfo = _serializer.uint32(obj.sv.length, bufferInfo);
    // Serialize message field [sv]
    obj.sv.forEach((val) => {
      bufferInfo = RxmSVSI_SV.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type RxmSVSI
    let tmp;
    let len;
    let data = new RxmSVSI();
    // Deserialize message field [iTOW]
    tmp = _deserializer.int32(buffer);
    data.iTOW = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [week]
    tmp = _deserializer.int16(buffer);
    data.week = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [numVis]
    tmp = _deserializer.uint8(buffer);
    data.numVis = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [numSV]
    tmp = _deserializer.uint8(buffer);
    data.numSV = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [sv]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [sv]
    data.sv = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = RxmSVSI_SV.deserialize(buffer);
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
    return 'ublox_msgs/RxmSVSI';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '98aa3a36683a81726f4382ea8e0b7c1b';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # RXM-SVSI (0x02 0x20)
    # SV Status Info
    #
    # Status of the receiver manager knowledge about GPS Orbit Validity
    #
    
    uint8 CLASS_ID = 2
    uint8 MESSAGE_ID = 32
    
    int32 iTOW              # Measurement integer millisecond GPS time of week [ms]
    int16 week              # Measurement GPS week number [weeks]
    
    uint8 numVis            # Number of visible satellites
    uint8 numSV             # Number of per-SV data blocks following
    
    RxmSVSI_SV[] sv
    
    ================================================================================
    MSG: ublox_msgs/RxmSVSI_SV
    # see message RxmSVSI
    #
    
    uint8 svid            # Satellite ID
    
    uint8 svFlag          # Information Flags
    uint8 FLAG_URA_MASK = 15      # Figure of Merit (URA) range 0..15
    uint8 FLAG_HEALTHY = 16       # SV healthy flag
    uint8 FLAG_EPH_VAL = 32       # Ephemeris valid
    uint8 FLAG_ALM_VAL = 64       # Almanach valid
    uint8 FLAG_NOT_AVAIL = 128    # SV not available
    
    int16 azi             # Azimuth
    int8 elev             # Elevation
    
    uint8 age             # Age of Almanach and Ephemeris
    uint8 AGE_ALM_MASK = 15       # Age of ALM in days offset by 4
                                  # i.e. the reference time may be in the future:
                                  # ageOfAlm = (age & 0x0f) - 4
    uint8 AGE_EPH_MASK = 240      # Age of EPH in hours offset by 4.
                                  # i.e. the reference time may be in the future:
                                  # ageOfEph = ((age & 0xf0) >> 4) - 4
    
    `;
  }

};

// Constants for message
RxmSVSI.Constants = {
  CLASS_ID: 2,
  MESSAGE_ID: 32,
}

module.exports = RxmSVSI;
