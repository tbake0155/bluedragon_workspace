// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class CfgGNSS {
  constructor() {
    this.msgVer = 0;
    this.numTrkChHw = 0;
    this.numTrkChUse = 0;
    this.numConfigBlocks = 0;
    this.gnssId = 0;
    this.resTrkCh = 0;
    this.maxTrkCh = 0;
    this.reserved1 = 0;
    this.flags = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type CfgGNSS
    // Serialize message field [msgVer]
    bufferInfo = _serializer.uint8(obj.msgVer, bufferInfo);
    // Serialize message field [numTrkChHw]
    bufferInfo = _serializer.uint8(obj.numTrkChHw, bufferInfo);
    // Serialize message field [numTrkChUse]
    bufferInfo = _serializer.uint8(obj.numTrkChUse, bufferInfo);
    // Serialize message field [numConfigBlocks]
    bufferInfo = _serializer.uint8(obj.numConfigBlocks, bufferInfo);
    // Serialize message field [gnssId]
    bufferInfo = _serializer.uint8(obj.gnssId, bufferInfo);
    // Serialize message field [resTrkCh]
    bufferInfo = _serializer.uint8(obj.resTrkCh, bufferInfo);
    // Serialize message field [maxTrkCh]
    bufferInfo = _serializer.uint8(obj.maxTrkCh, bufferInfo);
    // Serialize message field [reserved1]
    bufferInfo = _serializer.uint8(obj.reserved1, bufferInfo);
    // Serialize message field [flags]
    bufferInfo = _serializer.uint32(obj.flags, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type CfgGNSS
    let tmp;
    let len;
    let data = new CfgGNSS();
    // Deserialize message field [msgVer]
    tmp = _deserializer.uint8(buffer);
    data.msgVer = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [numTrkChHw]
    tmp = _deserializer.uint8(buffer);
    data.numTrkChHw = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [numTrkChUse]
    tmp = _deserializer.uint8(buffer);
    data.numTrkChUse = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [numConfigBlocks]
    tmp = _deserializer.uint8(buffer);
    data.numConfigBlocks = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [gnssId]
    tmp = _deserializer.uint8(buffer);
    data.gnssId = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [resTrkCh]
    tmp = _deserializer.uint8(buffer);
    data.resTrkCh = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [maxTrkCh]
    tmp = _deserializer.uint8(buffer);
    data.maxTrkCh = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reserved1]
    tmp = _deserializer.uint8(buffer);
    data.reserved1 = tmp.data;
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
    return 'ublox_msgs/CfgGNSS';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b7f92af0b44aa7c047fd14c5926fb0fc';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # CFG-GNSS (0x06 0x3E)
    # GNSS Configuration
    # Gets or sets the GNSS system channel sharing configuration.
    
    uint8 CLASS_ID = 6
    uint8 MESSAGE_ID = 62
    
    uint8 msgVer            # Message version (= 0 for this version)
    uint8 numTrkChHw        # Number of tracking channels in hardware (read only)
    uint8 numTrkChUse       # Number of tracking channels to use (<= numTrkChHw)
    uint8 numConfigBlocks   # Number of configuration blocks following (set to 1)
    
    uint8 gnssId            # GNSS identifier (select from following list)
    
    uint8 GNSS_ID_GPS = 0
    uint8 GNSS_ID_SBAS = 1
    uint8 GNSS_ID_GALILEO = 2
    uint8 GNSS_ID_BEIDOU = 3
    uint8 GNSS_ID_QZSS = 5
    uint8 GNSS_ID_GLONASS = 6
    
    uint8 resTrkCh          # Number of reserved (minimum) tracking channels for this GNSS system
    uint8 maxTrkCh          # Maximum number of tracking channels (>=resTrkChn)
    uint8 reserved1         # Reserved
    uint32 flags            # Bitfield of flags (bit 0 = enable/disable)
    `;
  }

};

// Constants for message
CfgGNSS.Constants = {
  CLASS_ID: 6,
  MESSAGE_ID: 62,
  GNSS_ID_GPS: 0,
  GNSS_ID_SBAS: 1,
  GNSS_ID_GALILEO: 2,
  GNSS_ID_BEIDOU: 3,
  GNSS_ID_QZSS: 5,
  GNSS_ID_GLONASS: 6,
}

module.exports = CfgGNSS;
