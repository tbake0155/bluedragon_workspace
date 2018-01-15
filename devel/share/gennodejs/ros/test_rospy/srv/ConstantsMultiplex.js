// Auto-generated. Do not edit!

// (in-package test_rospy.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class ConstantsMultiplexRequest {
  constructor() {
    this.selection = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ConstantsMultiplexRequest
    // Serialize message field [selection]
    bufferInfo = _serializer.byte(obj.selection, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ConstantsMultiplexRequest
    let tmp;
    let len;
    let data = new ConstantsMultiplexRequest();
    // Deserialize message field [selection]
    tmp = _deserializer.byte(buffer);
    data.selection = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'test_rospy/ConstantsMultiplexRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '3e3b2ecf5f3e7d25830bd97a7fd13b17';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    byte BYTE_X=0
    byte BYTE_Y=15
    byte BYTE_Z=5
    int32 INT32_X=0
    int32 INT32_Y=-12345678
    int32 INT32_Z=12345678
    uint32 UINT32_X=0
    uint32 UINT32_Y=12345678
    uint32 UINT32_Z=1
    float32 FLOAT32_X=0.0
    float32 FLOAT32_Y=-3.14159
    float32 FLOAT32_Z=12345.78
    byte SELECT_X=1
    byte SELECT_Y=2
    byte SELECT_Z=3
    byte selection
    
    `;
  }

};

// Constants for message
ConstantsMultiplexRequest.Constants = {
  BYTE_X: 0,
  BYTE_Y: 15,
  BYTE_Z: 5,
  INT32_X: 0,
  INT32_Y: -12345678,
  INT32_Z: 12345678,
  UINT32_X: 0,
  UINT32_Y: 12345678,
  UINT32_Z: 1,
  FLOAT32_X: 0.0,
  FLOAT32_Y: -3.14159,
  FLOAT32_Z: 12345.78,
  SELECT_X: 1,
  SELECT_Y: 2,
  SELECT_Z: 3,
}

class ConstantsMultiplexResponse {
  constructor() {
    this.select_confirm = 0;
    this.ret_byte = 0;
    this.ret_int32 = 0;
    this.ret_uint32 = 0;
    this.ret_float32 = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ConstantsMultiplexResponse
    // Serialize message field [select_confirm]
    bufferInfo = _serializer.byte(obj.select_confirm, bufferInfo);
    // Serialize message field [ret_byte]
    bufferInfo = _serializer.byte(obj.ret_byte, bufferInfo);
    // Serialize message field [ret_int32]
    bufferInfo = _serializer.int32(obj.ret_int32, bufferInfo);
    // Serialize message field [ret_uint32]
    bufferInfo = _serializer.uint32(obj.ret_uint32, bufferInfo);
    // Serialize message field [ret_float32]
    bufferInfo = _serializer.float32(obj.ret_float32, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ConstantsMultiplexResponse
    let tmp;
    let len;
    let data = new ConstantsMultiplexResponse();
    // Deserialize message field [select_confirm]
    tmp = _deserializer.byte(buffer);
    data.select_confirm = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ret_byte]
    tmp = _deserializer.byte(buffer);
    data.ret_byte = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ret_int32]
    tmp = _deserializer.int32(buffer);
    data.ret_int32 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ret_uint32]
    tmp = _deserializer.uint32(buffer);
    data.ret_uint32 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ret_float32]
    tmp = _deserializer.float32(buffer);
    data.ret_float32 = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'test_rospy/ConstantsMultiplexResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '012320975f41b58dcffb5b0e7a154691';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    byte CONFIRM_X=1
    byte CONFIRM_Y=2
    byte CONFIRM_Z=3
    byte select_confirm
    byte ret_byte
    int32 ret_int32
    uint32 ret_uint32
    float32 ret_float32
    
    `;
  }

};

// Constants for message
ConstantsMultiplexResponse.Constants = {
  CONFIRM_X: 1,
  CONFIRM_Y: 2,
  CONFIRM_Z: 3,
}

module.exports = {
  Request: ConstantsMultiplexRequest,
  Response: ConstantsMultiplexResponse
};
