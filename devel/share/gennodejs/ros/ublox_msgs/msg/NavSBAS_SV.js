// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class NavSBAS_SV {
  constructor() {
    this.svid = 0;
    this.flags = 0;
    this.udre = 0;
    this.svSys = 0;
    this.svService = 0;
    this.reserved1 = 0;
    this.prc = 0;
    this.reserved2 = 0;
    this.ic = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type NavSBAS_SV
    // Serialize message field [svid]
    bufferInfo = _serializer.uint8(obj.svid, bufferInfo);
    // Serialize message field [flags]
    bufferInfo = _serializer.uint8(obj.flags, bufferInfo);
    // Serialize message field [udre]
    bufferInfo = _serializer.uint8(obj.udre, bufferInfo);
    // Serialize message field [svSys]
    bufferInfo = _serializer.uint8(obj.svSys, bufferInfo);
    // Serialize message field [svService]
    bufferInfo = _serializer.uint8(obj.svService, bufferInfo);
    // Serialize message field [reserved1]
    bufferInfo = _serializer.uint8(obj.reserved1, bufferInfo);
    // Serialize message field [prc]
    bufferInfo = _serializer.int16(obj.prc, bufferInfo);
    // Serialize message field [reserved2]
    bufferInfo = _serializer.uint16(obj.reserved2, bufferInfo);
    // Serialize message field [ic]
    bufferInfo = _serializer.int16(obj.ic, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type NavSBAS_SV
    let tmp;
    let len;
    let data = new NavSBAS_SV();
    // Deserialize message field [svid]
    tmp = _deserializer.uint8(buffer);
    data.svid = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [flags]
    tmp = _deserializer.uint8(buffer);
    data.flags = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [udre]
    tmp = _deserializer.uint8(buffer);
    data.udre = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [svSys]
    tmp = _deserializer.uint8(buffer);
    data.svSys = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [svService]
    tmp = _deserializer.uint8(buffer);
    data.svService = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reserved1]
    tmp = _deserializer.uint8(buffer);
    data.reserved1 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [prc]
    tmp = _deserializer.int16(buffer);
    data.prc = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reserved2]
    tmp = _deserializer.uint16(buffer);
    data.reserved2 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ic]
    tmp = _deserializer.int16(buffer);
    data.ic = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ublox_msgs/NavSBAS_SV';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '45259031fe19a4df2f5a4a667356a0bc';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # see message NavSBAS
    #
    
    uint8 svid              # SV Id
    uint8 flags             # Flags for this SV
    uint8 udre              # Monitoring status
    uint8 svSys             # System (WAAS/EGNOS/...), same as SYS
    uint8 svService         # Services available, same as SERVICE
    uint8 reserved1         # Reserved
    int16 prc               # Pseudo Range correction in [cm]
    uint16 reserved2        # Reserved
    int16 ic                # Ionosphere correction in [cm]
    
    `;
  }

};

module.exports = NavSBAS_SV;
