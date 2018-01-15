// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class CfgSBAS {
  constructor() {
    this.mode = 0;
    this.usage = 0;
    this.maxSBAS = 0;
    this.scanmode2 = 0;
    this.scanmode1 = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type CfgSBAS
    // Serialize message field [mode]
    bufferInfo = _serializer.uint8(obj.mode, bufferInfo);
    // Serialize message field [usage]
    bufferInfo = _serializer.uint8(obj.usage, bufferInfo);
    // Serialize message field [maxSBAS]
    bufferInfo = _serializer.uint8(obj.maxSBAS, bufferInfo);
    // Serialize message field [scanmode2]
    bufferInfo = _serializer.uint8(obj.scanmode2, bufferInfo);
    // Serialize message field [scanmode1]
    bufferInfo = _serializer.uint32(obj.scanmode1, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type CfgSBAS
    let tmp;
    let len;
    let data = new CfgSBAS();
    // Deserialize message field [mode]
    tmp = _deserializer.uint8(buffer);
    data.mode = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [usage]
    tmp = _deserializer.uint8(buffer);
    data.usage = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [maxSBAS]
    tmp = _deserializer.uint8(buffer);
    data.maxSBAS = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [scanmode2]
    tmp = _deserializer.uint8(buffer);
    data.scanmode2 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [scanmode1]
    tmp = _deserializer.uint32(buffer);
    data.scanmode1 = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ublox_msgs/CfgSBAS';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '39af6a94627471fe56e5091b5bd74bf2';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # CFG-SBAS (0x06 0x24)
    # SBAS Configuration
    #
    
    uint8 CLASS_ID = 6
    uint8 MESSAGE_ID = 22
    
    uint8 mode              # SBAS Mode
    uint8 MODE_ENABLED = 1    # SBAS Enabled (1) / Disabled (0)
    uint8 MODE_TEST = 2       # SBAS Testbed: Use data anyhow (1) / Ignore data when in Test Mode (SBAS Msg 0)
    
    uint8 usage             # SBAS Usage
    uint8 USAGE_RANGE = 1     # Use SBAS GEOs as a ranging source (for navigation)
    uint8 USAGE_DIFFCORR = 2  # Use SBAS Differential Corrections
    uint8 USAGE_INTEGRITY = 4 # Use SBAS Integrity Information
    
    uint8 maxSBAS           # Maximum Number of SBAS prioritized tracking
                            # channels (valid range: 0 - 3) to use
    
    
    uint8 scanmode2         # Continuation of scanmode bitmask below
    uint32 scanmode1        # Which SBAS PRN numbers to search for (Bitmask)
                            # If all Bits are set to zero, auto-scan (i.e. all valid
                            # PRNs) are searched. Every bit corresponds to a PRN number.
    
    `;
  }

};

// Constants for message
CfgSBAS.Constants = {
  CLASS_ID: 6,
  MESSAGE_ID: 22,
  MODE_ENABLED: 1,
  MODE_TEST: 2,
  USAGE_RANGE: 1,
  USAGE_DIFFCORR: 2,
  USAGE_INTEGRITY: 4,
}

module.exports = CfgSBAS;
