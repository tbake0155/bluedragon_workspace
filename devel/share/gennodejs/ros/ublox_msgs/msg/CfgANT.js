// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class CfgANT {
  constructor() {
    this.flags = 0;
    this.pins = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type CfgANT
    // Serialize message field [flags]
    bufferInfo = _serializer.uint16(obj.flags, bufferInfo);
    // Serialize message field [pins]
    bufferInfo = _serializer.uint16(obj.pins, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type CfgANT
    let tmp;
    let len;
    let data = new CfgANT();
    // Deserialize message field [flags]
    tmp = _deserializer.uint16(buffer);
    data.flags = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [pins]
    tmp = _deserializer.uint16(buffer);
    data.pins = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ublox_msgs/CfgANT';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '9e3add3a4d57d340f23eecf447a5c89e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # CFG-ANT (0x06 0x13)
    # Antenna Control Settings
    #
    
    uint8 CLASS_ID = 6
    uint8 MESSAGE_ID = 19
    
    uint16 flags            # Antenna Flag Mask
    uint16 FLAGS_SVCS = 1         # Enable Antenna Supply Voltage Control Signal
    uint16 FLAGS_SCD = 2          # Enable Short Circuit Detection
    uint16 FLAGS_OCD = 4          # Enable Open Circuit Detection
    uint16 FLAGS_PDWN_ON_SCD = 8  # Power Down Antenna supply if Short Circuit is detected. (only in combination with Bit 1)
    uint16 FLAGS_RECOVERY = 16    # Enable automatic recovery from short state
    
    uint16 pins             # Antenna Pin Configuration
    uint16 PIN_SWITCH_MASK = 31    # PIO-Pin used for switching antenna supply (internal to TIM-LP/TIM-LF)
    uint16 PIN_SCD_MASK = 992      # PIO-Pin used for detecting a short in the antenna supply
    uint16 PIN_OCD_MASK = 31744    # PIO-Pin used for detecting open/not connected antenna
    uint16 PIN_RECONFIG = 16384    # if set to one, and this command is sent to the receiver, the receiver will reconfigure the pins as specified.
    
    `;
  }

};

// Constants for message
CfgANT.Constants = {
  CLASS_ID: 6,
  MESSAGE_ID: 19,
  FLAGS_SVCS: 1,
  FLAGS_SCD: 2,
  FLAGS_OCD: 4,
  FLAGS_PDWN_ON_SCD: 8,
  FLAGS_RECOVERY: 16,
  PIN_SWITCH_MASK: 31,
  PIN_SCD_MASK: 992,
  PIN_OCD_MASK: 31744,
  PIN_RECONFIG: 16384,
}

module.exports = CfgANT;
