// Auto-generated. Do not edit!

// (in-package ublox_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class CfgPRT {
  constructor() {
    this.portID = 0;
    this.reserved0 = 0;
    this.txReady = 0;
    this.mode = 0;
    this.baudRate = 0;
    this.inProtoMask = 0;
    this.outProtoMask = 0;
    this.reserved4 = 0;
    this.reserved5 = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type CfgPRT
    // Serialize message field [portID]
    bufferInfo = _serializer.uint8(obj.portID, bufferInfo);
    // Serialize message field [reserved0]
    bufferInfo = _serializer.uint8(obj.reserved0, bufferInfo);
    // Serialize message field [txReady]
    bufferInfo = _serializer.uint16(obj.txReady, bufferInfo);
    // Serialize message field [mode]
    bufferInfo = _serializer.uint32(obj.mode, bufferInfo);
    // Serialize message field [baudRate]
    bufferInfo = _serializer.uint32(obj.baudRate, bufferInfo);
    // Serialize message field [inProtoMask]
    bufferInfo = _serializer.uint16(obj.inProtoMask, bufferInfo);
    // Serialize message field [outProtoMask]
    bufferInfo = _serializer.uint16(obj.outProtoMask, bufferInfo);
    // Serialize message field [reserved4]
    bufferInfo = _serializer.uint16(obj.reserved4, bufferInfo);
    // Serialize message field [reserved5]
    bufferInfo = _serializer.uint16(obj.reserved5, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type CfgPRT
    let tmp;
    let len;
    let data = new CfgPRT();
    // Deserialize message field [portID]
    tmp = _deserializer.uint8(buffer);
    data.portID = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reserved0]
    tmp = _deserializer.uint8(buffer);
    data.reserved0 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [txReady]
    tmp = _deserializer.uint16(buffer);
    data.txReady = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [mode]
    tmp = _deserializer.uint32(buffer);
    data.mode = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [baudRate]
    tmp = _deserializer.uint32(buffer);
    data.baudRate = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [inProtoMask]
    tmp = _deserializer.uint16(buffer);
    data.inProtoMask = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [outProtoMask]
    tmp = _deserializer.uint16(buffer);
    data.outProtoMask = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reserved4]
    tmp = _deserializer.uint16(buffer);
    data.reserved4 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reserved5]
    tmp = _deserializer.uint16(buffer);
    data.reserved5 = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ublox_msgs/CfgPRT';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '3679d3ad278d5329fb8543226a55acca';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # CFG-PRT (0x06 0x00)
    # Port Configuration for UART
    #
    # Several configurations can be concatenated to one input message. In this case the payload
    # length can be a multiple of the normal length (see the other versions of CFG-PRT). Output
    # messages from the module contain only one configuration unit.
    #
    
    uint8 CLASS_ID = 6
    uint8 MESSAGE_ID = 0
    
    uint8 portID              # Port Identifier Number (= 1 or 2 for UART ports)
    uint8 PORT_ID_UART1 = 1
    uint8 PORT_ID_UART2 = 2
    uint8 PORT_ID_USB = 3
    
    uint8 reserved0           # Reserved
    
    uint16 txReady            # reserved (Alwyas set to zero) up to Firmware 7.01,
                              # TX ready PIN configuration (since Firmware 7.01)
    uint16 TX_READY_EN = 1                    # Enable TX ready feature for this port
    uint16 TX_READY_POLARITY_HIGH_ACTIVE = 0  # Polarity High-active
    uint16 TX_READY_POLARITY_LOW_ACTIVE = 2   # Polarity Low-active
    uint16 TX_READY_PIN_SHIFT = 2             # PIO to be used (must not be in use already by another function)
    uint16 TX_READY_PIN_MASK = 124            #
    uint16 TX_READY_THRES_SHIFT = 7           # Threshold
    uint16 TX_READY_THRES_MASK = 65408        # The given threshold is multiplied by 8 bytes.
                                              # The TX ready PIN goes active after >= thres*8 bytes are pending for the port and going inactive after the last
                                              # pending bytes have been written to hardware (0-4 bytes before end of stream).
    
    uint32 mode               # A bit mask describing the UART mode
    uint32 MODE_RESERVED1 = 16                # Default 1 for compatibility with A4
    uint32 MODE_CHAR_LEN_MASK = 192           # Character Length
    uint32 MODE_CHAR_LEN_5BIT = 0               # 5bit (not supported)
    uint32 MODE_CHAR_LEN_6BIT = 64              # 6bit (not supported)
    uint32 MODE_CHAR_LEN_7BIT = 128             # 7bit (supported only with parity)
    uint32 MODE_CHAR_LEN_8BIT = 192             # 8bit
    uint32 MODE_PARITY_MASK = 3584            #
    uint32 MODE_PARITY_EVEN = 0                 # Even Parity
    uint32 MODE_PARITY_ODD = 512                # Odd Parity
    uint32 MODE_PARITY_NO = 2048                # No Parity
    uint32 MODE_STOP_BITS_MASK = 12288        # Number of Stop Bits
    uint32 MODE_STOP_BITS_1 = 0                 # 1 Stop Bit
    uint32 MODE_STOP_BITS_15 = 4096             # 1.5 Stop Bit
    uint32 MODE_STOP_BITS_2 = 8192              # 2 Stop Bit
    uint32 MODE_STOP_BITS_05 = 12288            # 0.5 Stop Bit
    
    uint32 baudRate           # Baudrate in bits/second [bits/s]
    
    uint16 inProtoMask        # A mask describing which input protocols are active.
                              # Each bit of this mask is used for a protocol.
                              # Through that, multiple protocols can be defined
                              # on a single port.
    
    uint16 outProtoMask       # A mask describing which output protocols are active.
                              # Each bit of this mask is used for a protocol.
                              # Through that, multiple protocols can be defined
                              # on a single port.
    
    uint16 PROTO_UBX = 1
    uint16 PROTO_NMEA = 2
    uint16 PROTO_RTCM = 4
    
    uint16 reserved4          # Always set to zero
    uint16 reserved5          # Always set to zero
    
    `;
  }

};

// Constants for message
CfgPRT.Constants = {
  CLASS_ID: 6,
  MESSAGE_ID: 0,
  PORT_ID_UART1: 1,
  PORT_ID_UART2: 2,
  PORT_ID_USB: 3,
  TX_READY_EN: 1,
  TX_READY_POLARITY_HIGH_ACTIVE: 0,
  TX_READY_POLARITY_LOW_ACTIVE: 2,
  TX_READY_PIN_SHIFT: 2,
  TX_READY_PIN_MASK: 124,
  TX_READY_THRES_SHIFT: 7,
  TX_READY_THRES_MASK: 65408,
  MODE_RESERVED1: 16,
  MODE_CHAR_LEN_MASK: 192,
  MODE_CHAR_LEN_5BIT: 0,
  MODE_CHAR_LEN_6BIT: 64,
  MODE_CHAR_LEN_7BIT: 128,
  MODE_CHAR_LEN_8BIT: 192,
  MODE_PARITY_MASK: 3584,
  MODE_PARITY_EVEN: 0,
  MODE_PARITY_ODD: 512,
  MODE_PARITY_NO: 2048,
  MODE_STOP_BITS_MASK: 12288,
  MODE_STOP_BITS_1: 0,
  MODE_STOP_BITS_15: 4096,
  MODE_STOP_BITS_2: 8192,
  MODE_STOP_BITS_05: 12288,
  PROTO_UBX: 1,
  PROTO_NMEA: 2,
  PROTO_RTCM: 4,
}

module.exports = CfgPRT;
