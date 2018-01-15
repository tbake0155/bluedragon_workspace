// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class CfgMSG {
  constructor() {
    this.msgClass = 0;
    this.msgID = 0;
    this.rate = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type CfgMSG
    // Serialize message field [msgClass]
    bufferInfo = _serializer.uint8(obj.msgClass, bufferInfo);
    // Serialize message field [msgID]
    bufferInfo = _serializer.uint8(obj.msgID, bufferInfo);
    // Serialize message field [rate]
    bufferInfo = _serializer.uint8(obj.rate, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type CfgMSG
    let tmp;
    let len;
    let data = new CfgMSG();
    // Deserialize message field [msgClass]
    tmp = _deserializer.uint8(buffer);
    data.msgClass = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [msgID]
    tmp = _deserializer.uint8(buffer);
    data.msgID = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [rate]
    tmp = _deserializer.uint8(buffer);
    data.rate = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ublox_msgs/CfgMSG';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '9f2fcd2333c19c76cbfdf6a57fc64a9d';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # CFG-MSG (0x06 0x01)
    # Message Rate(s)
    #
    
    uint8 CLASS_ID = 6
    uint8 MESSAGE_ID = 1
    
    uint8 msgClass            # Message Class
    uint8 msgID               # Message Identifier
    uint8 rate                # Send rate on current Target
    
    `;
  }

};

// Constants for message
CfgMSG.Constants = {
  CLASS_ID: 6,
  MESSAGE_ID: 1,
}

module.exports = CfgMSG;
