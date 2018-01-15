// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class RxmSVSI_SV {
  constructor() {
    this.svid = 0;
    this.svFlag = 0;
    this.azi = 0;
    this.elev = 0;
    this.age = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RxmSVSI_SV
    // Serialize message field [svid]
    bufferInfo = _serializer.uint8(obj.svid, bufferInfo);
    // Serialize message field [svFlag]
    bufferInfo = _serializer.uint8(obj.svFlag, bufferInfo);
    // Serialize message field [azi]
    bufferInfo = _serializer.int16(obj.azi, bufferInfo);
    // Serialize message field [elev]
    bufferInfo = _serializer.int8(obj.elev, bufferInfo);
    // Serialize message field [age]
    bufferInfo = _serializer.uint8(obj.age, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type RxmSVSI_SV
    let tmp;
    let len;
    let data = new RxmSVSI_SV();
    // Deserialize message field [svid]
    tmp = _deserializer.uint8(buffer);
    data.svid = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [svFlag]
    tmp = _deserializer.uint8(buffer);
    data.svFlag = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [azi]
    tmp = _deserializer.int16(buffer);
    data.azi = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [elev]
    tmp = _deserializer.int8(buffer);
    data.elev = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [age]
    tmp = _deserializer.uint8(buffer);
    data.age = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ublox_msgs/RxmSVSI_SV';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b58fccf5178b8e0d3921f5737e017cc6';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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
RxmSVSI_SV.Constants = {
  FLAG_URA_MASK: 15,
  FLAG_HEALTHY: 16,
  FLAG_EPH_VAL: 32,
  FLAG_ALM_VAL: 64,
  FLAG_NOT_AVAIL: 128,
  AGE_ALM_MASK: 15,
  AGE_EPH_MASK: 240,
}

module.exports = RxmSVSI_SV;
