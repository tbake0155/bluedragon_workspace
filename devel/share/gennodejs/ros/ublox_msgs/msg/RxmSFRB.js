// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class RxmSFRB {
  constructor() {
    this.chn = 0;
    this.svid = 0;
    this.dwrd = new Array(10).fill(0);
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RxmSFRB
    // Serialize message field [chn]
    bufferInfo = _serializer.uint8(obj.chn, bufferInfo);
    // Serialize message field [svid]
    bufferInfo = _serializer.uint8(obj.svid, bufferInfo);
    // Serialize message field [dwrd]
    obj.dwrd.forEach((val) => {
      bufferInfo = _serializer.uint32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type RxmSFRB
    let tmp;
    let len;
    let data = new RxmSFRB();
    // Deserialize message field [chn]
    tmp = _deserializer.uint8(buffer);
    data.chn = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [svid]
    tmp = _deserializer.uint8(buffer);
    data.svid = tmp.data;
    buffer = tmp.buffer;
    len = 10;
    // Deserialize message field [dwrd]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.uint32(buffer);
      data.dwrd[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ublox_msgs/RxmSFRB';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'eec72635c768d0528138f40de7442203';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # RXM-SFRB (0x02 0x11)
    # Subframe Buffer
    #
    # The content of one single subframe buffer
    # For GPS satellites, the 10 dwrd values contain the parity checked subframe data for 10
    # Words. Each dwrd has 24 Bits with valid data (Bits 23 to 0). The remaining 8 bits (31 to 24)
    # have an undefined value. The direction within the Word is that the higher order bits are
    # received from the SV first. Example: The Preamble can be found in dwrd[0], at bit position
    # 23 down to 16. For more details on the data format please refer to the ICD-GPS-200C
    # Interface document.
    # For SBAS satellites, the 250 Bit message block can be found in dwrd[0] to dwrd[6] for the
    # first 224 bits. The remaining 26 bits are in dwrd[7], whereas Bits 25 and 24 are the last two
    # data bits, and Bits 23 down to 0 are the parity bits. For more information on SBAS data
    # format, please refer to RTCA/DO-229C (MOPS), Appendix A.
    #
    
    uint8 CLASS_ID = 2
    uint8 MESSAGE_ID = 17
    
    uint8 chn               # Channel Number
    uint8 svid              # ID of Satellite transmitting Subframe
    uint32[10] dwrd         # Words of Data
    
    `;
  }

};

// Constants for message
RxmSFRB.Constants = {
  CLASS_ID: 2,
  MESSAGE_ID: 17,
}

module.exports = RxmSFRB;
