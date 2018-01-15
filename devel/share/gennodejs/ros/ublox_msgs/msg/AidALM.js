// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class AidALM {
  constructor() {
    this.svid = 0;
    this.week = 0;
    this.dwrd = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type AidALM
    // Serialize message field [svid]
    bufferInfo = _serializer.uint32(obj.svid, bufferInfo);
    // Serialize message field [week]
    bufferInfo = _serializer.uint32(obj.week, bufferInfo);
    // Serialize the length for message field [dwrd]
    bufferInfo = _serializer.uint32(obj.dwrd.length, bufferInfo);
    // Serialize message field [dwrd]
    obj.dwrd.forEach((val) => {
      bufferInfo = _serializer.uint32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type AidALM
    let tmp;
    let len;
    let data = new AidALM();
    // Deserialize message field [svid]
    tmp = _deserializer.uint32(buffer);
    data.svid = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [week]
    tmp = _deserializer.uint32(buffer);
    data.week = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [dwrd]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [dwrd]
    data.dwrd = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.uint32(buffer);
      data.dwrd[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ublox_msgs/AidALM';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'de5ab2550e698fc8acfb7263c7c55fa2';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # RXM-ALM (0x02 0x30)
    # GPS Aiding Almanach Input/Output Message
    #
    # This message is provided considered obsolete, please use AID-ALM instead!
    # - If the WEEK Value is 0, DWRD0 to DWRD7 are not sent as the almanach is not available
    #   for the given SV. This may happen even if NAV-SVINFO and RXM-SVSI are indicating
    #   almanac availability as the internal data may not represent the content of an original
    #   broadcast almanac (or only parts thereof).
    # - DWORD0 to DWORD7 contain the 8 words following the Hand-Over Word ( HOW )
    #   from the GPS navigation message, either pages 1 to 24 of sub-frame 5 or pages 2 to 10
    #   of subframe 4. See IS-GPS-200 for a full description of the contents of the Almanac
    #   pages.
    # - In DWORD0 to DWORD7, the parity bits have been removed, and the 24 bits of data are
    #   located in Bits 0 to 23. Bits 24 to 31 shall be ignored.
    # - Example: Parameter e (Eccentricity) from Almanach Subframe 4/5, Word 3, Bits 69-84
    #   within the subframe can be found in DWRD0, Bits 15-0 whereas Bit 0 is the LSB.
    
    uint8 CLASS_ID = 11
    uint8 MESSAGE_ID = 48
    
    uint32 svid             # SV ID for which this Almanach Data is (Valid Range: 1 .. 32 or 51, 56, 63).
    uint32 week             # Issue Date of Almanach (GPS week number)
    
    # Start of optional block
    uint32[] dwrd           # Almanach Words
    # End of optional block
    
    `;
  }

};

// Constants for message
AidALM.Constants = {
  CLASS_ID: 11,
  MESSAGE_ID: 48,
}

module.exports = AidALM;
