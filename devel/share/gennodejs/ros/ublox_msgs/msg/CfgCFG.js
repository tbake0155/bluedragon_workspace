// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class CfgCFG {
  constructor() {
    this.clearMask = 0;
    this.saveMask = 0;
    this.loadMask = 0;
    this.deviceMask = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type CfgCFG
    // Serialize message field [clearMask]
    bufferInfo = _serializer.uint32(obj.clearMask, bufferInfo);
    // Serialize message field [saveMask]
    bufferInfo = _serializer.uint32(obj.saveMask, bufferInfo);
    // Serialize message field [loadMask]
    bufferInfo = _serializer.uint32(obj.loadMask, bufferInfo);
    // Serialize message field [deviceMask]
    bufferInfo = _serializer.uint8(obj.deviceMask, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type CfgCFG
    let tmp;
    let len;
    let data = new CfgCFG();
    // Deserialize message field [clearMask]
    tmp = _deserializer.uint32(buffer);
    data.clearMask = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [saveMask]
    tmp = _deserializer.uint32(buffer);
    data.saveMask = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [loadMask]
    tmp = _deserializer.uint32(buffer);
    data.loadMask = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [deviceMask]
    tmp = _deserializer.uint8(buffer);
    data.deviceMask = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ublox_msgs/CfgCFG';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '13fb5dc245f45e15f71ae45386c6e5b8';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # CFG-CFG (0x06 0x09)
    # Antenna Control Settings
    #
    
    uint8 CLASS_ID = 6
    uint8 MESSAGE_ID = 9
    
    uint32 clearMask          # Mask with configuration sub-sections to Clear
                              # (=Load Default Configurations to Permanent
                              # Configurations in non-volatile memory)
    uint32 saveMask           # Mask with configuration sub-section to Save
                              # (=Save Current Configuration to Non-volatile
                              # Memory)
    uint32 loadMask           # Mask with configuration sub-sections to Load
                              # (=Load Permanent Configurations from
                              # Non-volatile Memory to Current Configurations)
    
    uint32 MASK_IO_PORT = 1       # Port Settings
    uint32 MASK_MSG_CONF = 2      # Message Configuration
    uint32 MASK_INF_MSG = 4       # INF Message Configuration
    uint32 MASK_NAV_CONF = 8      # Navigation Configuration
    uint32 MASK_RXM_CONF = 16     # Receiver Manager Configuration
    uint32 MASK_RINV_CONF = 512   # Remote Inventory Configuration
    uint32 MASK_ANT_CONF = 1024   # Antenna Configuration
    
    uint8 deviceMask          # Mask which selects the devices for this command
    uint8 DEV_BBR = 1             # device battery backed RAM
    uint8 DEV_FLASH = 2           # device Flash
    uint8 DEV_EEPROM = 4          # device EEPROM
    uint8 DEV_SPI_FLASH = 16      # device SPI Flash
    
    `;
  }

};

// Constants for message
CfgCFG.Constants = {
  CLASS_ID: 6,
  MESSAGE_ID: 9,
  MASK_IO_PORT: 1,
  MASK_MSG_CONF: 2,
  MASK_INF_MSG: 4,
  MASK_NAV_CONF: 8,
  MASK_RXM_CONF: 16,
  MASK_RINV_CONF: 512,
  MASK_ANT_CONF: 1024,
  DEV_BBR: 1,
  DEV_FLASH: 2,
  DEV_EEPROM: 4,
  DEV_SPI_FLASH: 16,
}

module.exports = CfgCFG;
