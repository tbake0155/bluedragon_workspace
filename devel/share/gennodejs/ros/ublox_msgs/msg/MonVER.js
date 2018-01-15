// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class MonVER {
  constructor() {
    this.swVersion = new Array(30).fill(0);
    this.hwVersion = new Array(10).fill(0);
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type MonVER
    // Serialize message field [swVersion]
    obj.swVersion.forEach((val) => {
      bufferInfo = _serializer.char(val, bufferInfo);
    });
    // Serialize message field [hwVersion]
    obj.hwVersion.forEach((val) => {
      bufferInfo = _serializer.char(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type MonVER
    let tmp;
    let len;
    let data = new MonVER();
    len = 30;
    // Deserialize message field [swVersion]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.char(buffer);
      data.swVersion[i] = tmp.data;
      buffer = tmp.buffer;
    }
    len = 10;
    // Deserialize message field [hwVersion]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.char(buffer);
      data.hwVersion[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ublox_msgs/MonVER';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '89732a19b51c49be31e36fb80481a8d4';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # MON-VER (0xB5 0x62)
    # Receiver/Software Version
    # Returned when the version is polled.
    
    uint8 CLASS_ID = 10
    uint8 MESSAGE_ID = 4
    
    char[30] swVersion    # Zero-terminated software version string.
    char[10] hwVersion    # Zero-terminated hardware version string.
    
    # TODO: Implement support for dynamic char[] array in serializer.
    `;
  }

};

// Constants for message
MonVER.Constants = {
  CLASS_ID: 10,
  MESSAGE_ID: 4,
}

module.exports = MonVER;
