// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class RxmRAW_SV {
  constructor() {
    this.cpMes = 0.0;
    this.prMes = 0.0;
    this.doMes = 0.0;
    this.sv = 0;
    this.mesQI = 0;
    this.cno = 0;
    this.lli = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RxmRAW_SV
    // Serialize message field [cpMes]
    bufferInfo = _serializer.float64(obj.cpMes, bufferInfo);
    // Serialize message field [prMes]
    bufferInfo = _serializer.float64(obj.prMes, bufferInfo);
    // Serialize message field [doMes]
    bufferInfo = _serializer.float32(obj.doMes, bufferInfo);
    // Serialize message field [sv]
    bufferInfo = _serializer.uint8(obj.sv, bufferInfo);
    // Serialize message field [mesQI]
    bufferInfo = _serializer.int8(obj.mesQI, bufferInfo);
    // Serialize message field [cno]
    bufferInfo = _serializer.int8(obj.cno, bufferInfo);
    // Serialize message field [lli]
    bufferInfo = _serializer.uint8(obj.lli, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type RxmRAW_SV
    let tmp;
    let len;
    let data = new RxmRAW_SV();
    // Deserialize message field [cpMes]
    tmp = _deserializer.float64(buffer);
    data.cpMes = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [prMes]
    tmp = _deserializer.float64(buffer);
    data.prMes = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [doMes]
    tmp = _deserializer.float32(buffer);
    data.doMes = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [sv]
    tmp = _deserializer.uint8(buffer);
    data.sv = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [mesQI]
    tmp = _deserializer.int8(buffer);
    data.mesQI = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [cno]
    tmp = _deserializer.int8(buffer);
    data.cno = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [lli]
    tmp = _deserializer.uint8(buffer);
    data.lli = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ublox_msgs/RxmRAW_SV';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '4b32efd29577416a2c280e629abcb69a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # see message RxmRAW
    #
    
    float64 cpMes             # Carrier phase measurement [L1 cycles]
    float64 prMes             # Pseudorange measurement [m]
    float32 doMes             # Doppler measurement [Hz]
    
    uint8 sv                  # Space Vehicle Number
    int8 mesQI                # Nav Measurements Quality Indicator
                              #  >=4 : PR+DO OK
                              #  >=5 : PR+DO+CP OK
                              #  <6 : likely loss of carrier lock in previous interval
    int8 cno                  # Signal strength C/No. [dbHz]
    uint8 lli                 # Loss of lock indicator (RINEX definition)
    
    `;
  }

};

module.exports = RxmRAW_SV;
