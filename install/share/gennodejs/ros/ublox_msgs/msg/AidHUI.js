// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class AidHUI {
  constructor() {
    this.health = 0;
    this.utcA0 = 0.0;
    this.utcA1 = 0.0;
    this.utcTOW = 0;
    this.utcWNT = 0;
    this.utcLS = 0;
    this.utcWNF = 0;
    this.utcDN = 0;
    this.utcLSF = 0;
    this.utcSpare = 0;
    this.klobA0 = 0.0;
    this.klobA1 = 0.0;
    this.klobA2 = 0.0;
    this.klobA3 = 0.0;
    this.klobB0 = 0.0;
    this.klobB1 = 0.0;
    this.klobB2 = 0.0;
    this.klobB3 = 0.0;
    this.flags = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type AidHUI
    // Serialize message field [health]
    bufferInfo = _serializer.uint32(obj.health, bufferInfo);
    // Serialize message field [utcA0]
    bufferInfo = _serializer.float64(obj.utcA0, bufferInfo);
    // Serialize message field [utcA1]
    bufferInfo = _serializer.float64(obj.utcA1, bufferInfo);
    // Serialize message field [utcTOW]
    bufferInfo = _serializer.int32(obj.utcTOW, bufferInfo);
    // Serialize message field [utcWNT]
    bufferInfo = _serializer.int16(obj.utcWNT, bufferInfo);
    // Serialize message field [utcLS]
    bufferInfo = _serializer.int16(obj.utcLS, bufferInfo);
    // Serialize message field [utcWNF]
    bufferInfo = _serializer.int16(obj.utcWNF, bufferInfo);
    // Serialize message field [utcDN]
    bufferInfo = _serializer.int16(obj.utcDN, bufferInfo);
    // Serialize message field [utcLSF]
    bufferInfo = _serializer.int16(obj.utcLSF, bufferInfo);
    // Serialize message field [utcSpare]
    bufferInfo = _serializer.int16(obj.utcSpare, bufferInfo);
    // Serialize message field [klobA0]
    bufferInfo = _serializer.float32(obj.klobA0, bufferInfo);
    // Serialize message field [klobA1]
    bufferInfo = _serializer.float32(obj.klobA1, bufferInfo);
    // Serialize message field [klobA2]
    bufferInfo = _serializer.float32(obj.klobA2, bufferInfo);
    // Serialize message field [klobA3]
    bufferInfo = _serializer.float32(obj.klobA3, bufferInfo);
    // Serialize message field [klobB0]
    bufferInfo = _serializer.float32(obj.klobB0, bufferInfo);
    // Serialize message field [klobB1]
    bufferInfo = _serializer.float32(obj.klobB1, bufferInfo);
    // Serialize message field [klobB2]
    bufferInfo = _serializer.float32(obj.klobB2, bufferInfo);
    // Serialize message field [klobB3]
    bufferInfo = _serializer.float32(obj.klobB3, bufferInfo);
    // Serialize message field [flags]
    bufferInfo = _serializer.uint32(obj.flags, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type AidHUI
    let tmp;
    let len;
    let data = new AidHUI();
    // Deserialize message field [health]
    tmp = _deserializer.uint32(buffer);
    data.health = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [utcA0]
    tmp = _deserializer.float64(buffer);
    data.utcA0 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [utcA1]
    tmp = _deserializer.float64(buffer);
    data.utcA1 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [utcTOW]
    tmp = _deserializer.int32(buffer);
    data.utcTOW = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [utcWNT]
    tmp = _deserializer.int16(buffer);
    data.utcWNT = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [utcLS]
    tmp = _deserializer.int16(buffer);
    data.utcLS = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [utcWNF]
    tmp = _deserializer.int16(buffer);
    data.utcWNF = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [utcDN]
    tmp = _deserializer.int16(buffer);
    data.utcDN = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [utcLSF]
    tmp = _deserializer.int16(buffer);
    data.utcLSF = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [utcSpare]
    tmp = _deserializer.int16(buffer);
    data.utcSpare = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [klobA0]
    tmp = _deserializer.float32(buffer);
    data.klobA0 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [klobA1]
    tmp = _deserializer.float32(buffer);
    data.klobA1 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [klobA2]
    tmp = _deserializer.float32(buffer);
    data.klobA2 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [klobA3]
    tmp = _deserializer.float32(buffer);
    data.klobA3 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [klobB0]
    tmp = _deserializer.float32(buffer);
    data.klobB0 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [klobB1]
    tmp = _deserializer.float32(buffer);
    data.klobB1 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [klobB2]
    tmp = _deserializer.float32(buffer);
    data.klobB2 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [klobB3]
    tmp = _deserializer.float32(buffer);
    data.klobB3 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [flags]
    tmp = _deserializer.uint32(buffer);
    data.flags = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ublox_msgs/AidHUI';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '60cd4ce940333cb9b38edd447085ce5c';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # AID-HUI (0x0B 0x02)
    # GPS Health, UTC and ionosphere parameters
    #
    # This message contains a health bit mask, UTC time and Klobuchar parameters. For more
    # information on these parameters, please see the ICD-GPS-200 documentation.
    
    uint8 CLASS_ID = 11
    uint8 MESSAGE_ID = 2
    
    uint32  health          # Bitmask, every bit represenst a GPS SV (1-32). If the bit is set the SV is healthy.
    float64 utcA0           # UTC - parameter A0
    float64 utcA1           # UTC - parameter A1
    int32   utcTOW          # UTC - reference time of week
    int16   utcWNT          # UTC - reference week number
    int16   utcLS           # UTC - time difference due to leap seconds before event
    int16   utcWNF          # UTC - week number when next leap second event occurs
    int16   utcDN           # UTC - day of week when next leap second event occurs
    int16   utcLSF          # UTC - time difference due to leap seconds after event
    int16   utcSpare        # UTC - Spare to ensure structure is a multiple of 4 bytes
    float32 klobA0          #K lobuchar - alpha 0 [s]
    float32 klobA1          # Klobuchar - alpha 1 [s/semicircle]
    float32 klobA2          # Klobuchar - alpha 2 [s/semicircle^2]
    float32 klobA3          # Klobuchar - alpha 3 [s/semicircle^3]
    float32 klobB0          #K lobuchar - beta 0  [s]
    float32 klobB1          # Klobuchar - beta 1  [s/semicircle]
    float32 klobB2          # Klobuchar - beta 2  [s/semicircle^2]
    float32 klobB3          # Klobuchar - beta 3  [s/semicircle^3]
    uint32 flags            # flags
    uint32 FLAGS_HEALTH = 1     # Healthmask field in this message is valid
    uint32 FLAGS_UTC = 2        # UTC parameter fields in this message are valid
    uint32 FLAGS_KLOB = 4       # Klobuchar parameter fields in this message are valid
    
    `;
  }

};

// Constants for message
AidHUI.Constants = {
  CLASS_ID: 11,
  MESSAGE_ID: 2,
  FLAGS_HEALTH: 1,
  FLAGS_UTC: 2,
  FLAGS_KLOB: 4,
}

module.exports = AidHUI;
