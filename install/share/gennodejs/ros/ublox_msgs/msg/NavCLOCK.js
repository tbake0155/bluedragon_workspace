// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class NavCLOCK {
  constructor() {
    this.iTOW = 0;
    this.clkB = 0;
    this.clkD = 0;
    this.tAcc = 0;
    this.fAcc = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type NavCLOCK
    // Serialize message field [iTOW]
    bufferInfo = _serializer.uint32(obj.iTOW, bufferInfo);
    // Serialize message field [clkB]
    bufferInfo = _serializer.int32(obj.clkB, bufferInfo);
    // Serialize message field [clkD]
    bufferInfo = _serializer.int32(obj.clkD, bufferInfo);
    // Serialize message field [tAcc]
    bufferInfo = _serializer.uint32(obj.tAcc, bufferInfo);
    // Serialize message field [fAcc]
    bufferInfo = _serializer.uint32(obj.fAcc, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type NavCLOCK
    let tmp;
    let len;
    let data = new NavCLOCK();
    // Deserialize message field [iTOW]
    tmp = _deserializer.uint32(buffer);
    data.iTOW = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [clkB]
    tmp = _deserializer.int32(buffer);
    data.clkB = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [clkD]
    tmp = _deserializer.int32(buffer);
    data.clkD = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [tAcc]
    tmp = _deserializer.uint32(buffer);
    data.tAcc = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [fAcc]
    tmp = _deserializer.uint32(buffer);
    data.fAcc = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ublox_msgs/NavCLOCK';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a9acfdf2e7ac2bf086926ae4e6a182a0';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # NAV-CLOCK (0x01 0x22)
    # Clock Solution
    #
    
    uint8 CLASS_ID = 1
    uint8 MESSAGE_ID = 34
    
    uint32 iTOW             # GPS Millisecond Time of week [ms]
    
    int32 clkB              # Clock bias in nanoseconds [ns]
    int32 clkD              # Clock drift in nanoseconds per second [ns/s]
    uint32 tAcc             # Time Accuracy Estimate [ns]
    uint32 fAcc             # Frequency Accuracy Estimate [ps/s]
    
    `;
  }

};

// Constants for message
NavCLOCK.Constants = {
  CLASS_ID: 1,
  MESSAGE_ID: 34,
}

module.exports = NavCLOCK;
