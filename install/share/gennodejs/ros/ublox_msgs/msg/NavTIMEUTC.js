// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class NavTIMEUTC {
  constructor() {
    this.iTOW = 0;
    this.tAcc = 0;
    this.nano = 0;
    this.year = 0;
    this.month = 0;
    this.day = 0;
    this.hour = 0;
    this.min = 0;
    this.sec = 0;
    this.valid = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type NavTIMEUTC
    // Serialize message field [iTOW]
    bufferInfo = _serializer.uint32(obj.iTOW, bufferInfo);
    // Serialize message field [tAcc]
    bufferInfo = _serializer.uint32(obj.tAcc, bufferInfo);
    // Serialize message field [nano]
    bufferInfo = _serializer.int32(obj.nano, bufferInfo);
    // Serialize message field [year]
    bufferInfo = _serializer.uint16(obj.year, bufferInfo);
    // Serialize message field [month]
    bufferInfo = _serializer.uint8(obj.month, bufferInfo);
    // Serialize message field [day]
    bufferInfo = _serializer.uint8(obj.day, bufferInfo);
    // Serialize message field [hour]
    bufferInfo = _serializer.uint8(obj.hour, bufferInfo);
    // Serialize message field [min]
    bufferInfo = _serializer.uint8(obj.min, bufferInfo);
    // Serialize message field [sec]
    bufferInfo = _serializer.uint8(obj.sec, bufferInfo);
    // Serialize message field [valid]
    bufferInfo = _serializer.uint8(obj.valid, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type NavTIMEUTC
    let tmp;
    let len;
    let data = new NavTIMEUTC();
    // Deserialize message field [iTOW]
    tmp = _deserializer.uint32(buffer);
    data.iTOW = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [tAcc]
    tmp = _deserializer.uint32(buffer);
    data.tAcc = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [nano]
    tmp = _deserializer.int32(buffer);
    data.nano = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [year]
    tmp = _deserializer.uint16(buffer);
    data.year = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [month]
    tmp = _deserializer.uint8(buffer);
    data.month = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [day]
    tmp = _deserializer.uint8(buffer);
    data.day = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [hour]
    tmp = _deserializer.uint8(buffer);
    data.hour = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [min]
    tmp = _deserializer.uint8(buffer);
    data.min = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [sec]
    tmp = _deserializer.uint8(buffer);
    data.sec = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [valid]
    tmp = _deserializer.uint8(buffer);
    data.valid = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ublox_msgs/NavTIMEUTC';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '0ea9fbec0e54f3dbba61f743936c206a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # NAV-TIMEUTC (0x01 0x21)
    # UTC Time Solution
    #
    
    uint8 CLASS_ID = 1
    uint8 MESSAGE_ID = 33
    
    uint32 iTOW             # GPS Millisecond time of week [ms]
    
    uint32 tAcc             # Time Accuracy Estimate [ns]
    int32 nano              # Nanoseconds of second, range -1e9 .. 1e9 (UTC) [ns]
    uint16 year             # Year, range 1999..2099 (UTC) [y]
    uint8 month             # Month, range 1..12 (UTC) [month]
    uint8 day               # Day of Month, range 1..31 (UTC) [d]
    uint8 hour              # Hour of Day, range 0..23 (UTC) [h]
    uint8 min               # Minute of Hour, range 0..59 (UTC) [min]
    uint8 sec               # Seconds of Minute, range 0..59 (UTC) [s]
    
    uint8 valid             # Validity Flags
    uint8 VALID_TOW = 1         # Valid Time of Week
    uint8 VALID_WKN = 2         # Valid Week Number
    uint8 VALID_UTC = 4         # Valid Leap Seconds, i.e. Leap Seconds already known
    
    `;
  }

};

// Constants for message
NavTIMEUTC.Constants = {
  CLASS_ID: 1,
  MESSAGE_ID: 33,
  VALID_TOW: 1,
  VALID_WKN: 2,
  VALID_UTC: 4,
}

module.exports = NavTIMEUTC;
