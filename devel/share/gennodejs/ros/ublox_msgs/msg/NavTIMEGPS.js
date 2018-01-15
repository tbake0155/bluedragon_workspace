// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class NavTIMEGPS {
  constructor() {
    this.iTOW = 0;
    this.fTOW = 0;
    this.week = 0;
    this.leapS = 0;
    this.valid = 0;
    this.tAcc = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type NavTIMEGPS
    // Serialize message field [iTOW]
    bufferInfo = _serializer.uint32(obj.iTOW, bufferInfo);
    // Serialize message field [fTOW]
    bufferInfo = _serializer.int32(obj.fTOW, bufferInfo);
    // Serialize message field [week]
    bufferInfo = _serializer.int16(obj.week, bufferInfo);
    // Serialize message field [leapS]
    bufferInfo = _serializer.int8(obj.leapS, bufferInfo);
    // Serialize message field [valid]
    bufferInfo = _serializer.uint8(obj.valid, bufferInfo);
    // Serialize message field [tAcc]
    bufferInfo = _serializer.uint32(obj.tAcc, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type NavTIMEGPS
    let tmp;
    let len;
    let data = new NavTIMEGPS();
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
    // Deserialize message field [leapS]
    tmp = _deserializer.int8(buffer);
    data.leapS = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [valid]
    tmp = _deserializer.uint8(buffer);
    data.valid = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [tAcc]
    tmp = _deserializer.uint32(buffer);
    data.tAcc = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ublox_msgs/NavTIMEGPS';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '4b13e924e2a4818785c01a54ff86bd76';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # NAV-TIMEGPS (0x01 0x20)
    # GPS Time Solution
    #
    
    uint8 CLASS_ID = 1
    uint8 MESSAGE_ID = 32
    
    uint32 iTOW             # GPS Millisecond time of week [ms]
    int32 fTOW              # Fractional Nanoseconds remainder of rounded
                            # ms above, range -500000 .. 500000 [ns]
    int16 week              # GPS week (GPS time)
    
    int8 leapS              # Leap Seconds (GPS-UTC) [s]
    
    uint8 valid             # Validity Flags
    uint8 VALID_TOW = 1         # Valid Time of Week
    uint8 VALID_WEEK = 2        # Valid Week Number
    uint8 VALID_UTC = 4         # Valid Leap Seconds, i.e. Leap Seconds already known
    
    uint32 tAcc             # Time Accuracy Estimate [ns]
    
    `;
  }

};

// Constants for message
NavTIMEGPS.Constants = {
  CLASS_ID: 1,
  MESSAGE_ID: 32,
  VALID_TOW: 1,
  VALID_WEEK: 2,
  VALID_UTC: 4,
}

module.exports = NavTIMEGPS;
