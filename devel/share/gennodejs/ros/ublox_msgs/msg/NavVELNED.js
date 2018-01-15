// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class NavVELNED {
  constructor() {
    this.iTOW = 0;
    this.velN = 0;
    this.velE = 0;
    this.velD = 0;
    this.speed = 0;
    this.gSpeed = 0;
    this.heading = 0;
    this.sAcc = 0;
    this.cAcc = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type NavVELNED
    // Serialize message field [iTOW]
    bufferInfo = _serializer.uint32(obj.iTOW, bufferInfo);
    // Serialize message field [velN]
    bufferInfo = _serializer.int32(obj.velN, bufferInfo);
    // Serialize message field [velE]
    bufferInfo = _serializer.int32(obj.velE, bufferInfo);
    // Serialize message field [velD]
    bufferInfo = _serializer.int32(obj.velD, bufferInfo);
    // Serialize message field [speed]
    bufferInfo = _serializer.uint32(obj.speed, bufferInfo);
    // Serialize message field [gSpeed]
    bufferInfo = _serializer.uint32(obj.gSpeed, bufferInfo);
    // Serialize message field [heading]
    bufferInfo = _serializer.int32(obj.heading, bufferInfo);
    // Serialize message field [sAcc]
    bufferInfo = _serializer.uint32(obj.sAcc, bufferInfo);
    // Serialize message field [cAcc]
    bufferInfo = _serializer.uint32(obj.cAcc, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type NavVELNED
    let tmp;
    let len;
    let data = new NavVELNED();
    // Deserialize message field [iTOW]
    tmp = _deserializer.uint32(buffer);
    data.iTOW = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [velN]
    tmp = _deserializer.int32(buffer);
    data.velN = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [velE]
    tmp = _deserializer.int32(buffer);
    data.velE = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [velD]
    tmp = _deserializer.int32(buffer);
    data.velD = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [speed]
    tmp = _deserializer.uint32(buffer);
    data.speed = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [gSpeed]
    tmp = _deserializer.uint32(buffer);
    data.gSpeed = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [heading]
    tmp = _deserializer.int32(buffer);
    data.heading = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [sAcc]
    tmp = _deserializer.uint32(buffer);
    data.sAcc = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [cAcc]
    tmp = _deserializer.uint32(buffer);
    data.cAcc = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ublox_msgs/NavVELNED';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b03402bb86164e74f01e04bff1850150';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # NAV-VELNED (0x01 0x12)
    # Velocity Solution in NED
    #
    # See important comments concerning validity of velocity given in section
    # Navigation Output Filters.
    #
    
    uint8 CLASS_ID = 1
    uint8 MESSAGE_ID = 18
    
    uint32 iTOW             # GPS Millisecond time of week [ms]
    
    int32 velN              # NED north velocity [cm/s]
    int32 velE              # NED east velocity [cm/s]
    int32 velD              # NED down velocity [cm/s]
    uint32 speed            # Speed (3-D) [cm/s]
    uint32 gSpeed           # Ground Speed (2-D) [cm/s]
    int32 heading           # Heading of motion 2-D [deg / 1e-5]
    uint32 sAcc             # Speed Accuracy Estimate [cm/s]
    uint32 cAcc             # Course / Heading Accuracy Estimate [deg / 1e-5]
    
    `;
  }

};

// Constants for message
NavVELNED.Constants = {
  CLASS_ID: 1,
  MESSAGE_ID: 18,
}

module.exports = NavVELNED;
