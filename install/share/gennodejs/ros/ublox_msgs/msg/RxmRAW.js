// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let RxmRAW_SV = require('./RxmRAW_SV.js');

//-----------------------------------------------------------

class RxmRAW {
  constructor() {
    this.iTOW = 0;
    this.week = 0;
    this.numSV = 0;
    this.reserved1 = 0;
    this.sv = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RxmRAW
    // Serialize message field [iTOW]
    bufferInfo = _serializer.int32(obj.iTOW, bufferInfo);
    // Serialize message field [week]
    bufferInfo = _serializer.int16(obj.week, bufferInfo);
    // Serialize message field [numSV]
    bufferInfo = _serializer.uint8(obj.numSV, bufferInfo);
    // Serialize message field [reserved1]
    bufferInfo = _serializer.uint8(obj.reserved1, bufferInfo);
    // Serialize the length for message field [sv]
    bufferInfo = _serializer.uint32(obj.sv.length, bufferInfo);
    // Serialize message field [sv]
    obj.sv.forEach((val) => {
      bufferInfo = RxmRAW_SV.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type RxmRAW
    let tmp;
    let len;
    let data = new RxmRAW();
    // Deserialize message field [iTOW]
    tmp = _deserializer.int32(buffer);
    data.iTOW = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [week]
    tmp = _deserializer.int16(buffer);
    data.week = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [numSV]
    tmp = _deserializer.uint8(buffer);
    data.numSV = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reserved1]
    tmp = _deserializer.uint8(buffer);
    data.reserved1 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [sv]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [sv]
    data.sv = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = RxmRAW_SV.deserialize(buffer);
      data.sv[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ublox_msgs/RxmRAW';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '1933e39502131517c68160a4906d1675';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # RXM-RAW (0x02 0x10)
    # Raw Measurement Data
    #
    # This message contains all information needed to be able to generate a RINEX file.
    #
    
    uint8 CLASS_ID = 2
    uint8 MESSAGE_ID = 16
    
    int32 iTOW              # Measurement integer millisecond GPS time of week (Receiver Time) [ms]
    int16 week              # Measurement GPS week number (Receiver Time) [weeks]
    
    uint8 numSV             # # of satellites following
    uint8 reserved1         # Reserved
    
    RxmRAW_SV[] sv
    
    ================================================================================
    MSG: ublox_msgs/RxmRAW_SV
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

// Constants for message
RxmRAW.Constants = {
  CLASS_ID: 2,
  MESSAGE_ID: 16,
}

module.exports = RxmRAW;
