// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class CfgRATE {
  constructor() {
    this.measRate = 0;
    this.navRate = 0;
    this.timeRef = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type CfgRATE
    // Serialize message field [measRate]
    bufferInfo = _serializer.uint16(obj.measRate, bufferInfo);
    // Serialize message field [navRate]
    bufferInfo = _serializer.uint16(obj.navRate, bufferInfo);
    // Serialize message field [timeRef]
    bufferInfo = _serializer.uint16(obj.timeRef, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type CfgRATE
    let tmp;
    let len;
    let data = new CfgRATE();
    // Deserialize message field [measRate]
    tmp = _deserializer.uint16(buffer);
    data.measRate = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [navRate]
    tmp = _deserializer.uint16(buffer);
    data.navRate = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [timeRef]
    tmp = _deserializer.uint16(buffer);
    data.timeRef = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ublox_msgs/CfgRATE';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'da095554bde2600fd2a774def27fb48e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # CFG-RATE (0x06 0x08)
    # Navigation/Measurement Rate Settings
    #
    
    uint8 CLASS_ID = 6
    uint8 MESSAGE_ID = 8
    
    uint16 measRate           # Measurement Rate, GPS measurements are
                              # taken every measRate milliseconds [ms]
    uint16 navRate            # Navigation Rate, in number of measurement
                              # cycles. On u-blox 5 and u-blox 6, this parameter
                              # cannot be changed, and is always equals 1.
    uint16 timeRef            # Alignment to reference time: 0 = UTC time, 1 = GPS time
    uint16 TIME_REF_UTC = 0
    uint16 TIME_REF_GPS = 1
    
    `;
  }

};

// Constants for message
CfgRATE.Constants = {
  CLASS_ID: 6,
  MESSAGE_ID: 8,
  TIME_REF_UTC: 0,
  TIME_REF_GPS: 1,
}

module.exports = CfgRATE;
