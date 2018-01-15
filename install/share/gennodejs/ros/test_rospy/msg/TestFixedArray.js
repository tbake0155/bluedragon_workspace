// Auto-generated. Do not edit!

// (in-package test_rospy.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class TestFixedArray {
  constructor() {
    this.f32_1 = new Array(1).fill(0);
    this.f32_3 = new Array(3).fill(0);
    this.f64_1 = new Array(1).fill(0);
    this.f64_3 = new Array(3).fill(0);
    this.i8_1 = new Array(1).fill(0);
    this.i8_3 = new Array(3).fill(0);
    this.u8_1 = new Array(1).fill(0);
    this.u8_3 = new Array(3).fill(0);
    this.i32_1 = new Array(1).fill(0);
    this.i32_3 = new Array(3).fill(0);
    this.u32_1 = new Array(1).fill(0);
    this.u32_3 = new Array(3).fill(0);
    this.s_1 = new Array(1).fill(0);
    this.s_3 = new Array(3).fill(0);
    this.b_1 = new Array(1).fill(0);
    this.b_3 = new Array(3).fill(0);
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TestFixedArray
    // Serialize message field [f32_1]
    obj.f32_1.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    // Serialize message field [f32_3]
    obj.f32_3.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    // Serialize message field [f64_1]
    obj.f64_1.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize message field [f64_3]
    obj.f64_3.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize message field [i8_1]
    obj.i8_1.forEach((val) => {
      bufferInfo = _serializer.int8(val, bufferInfo);
    });
    // Serialize message field [i8_3]
    obj.i8_3.forEach((val) => {
      bufferInfo = _serializer.int8(val, bufferInfo);
    });
    // Serialize message field [u8_1]
    bufferInfo.buffer.push(obj.u8_1);
    bufferInfo.length += obj.u8_1.length;
    // Serialize message field [u8_3]
    bufferInfo.buffer.push(obj.u8_3);
    bufferInfo.length += obj.u8_3.length;
    // Serialize message field [i32_1]
    obj.i32_1.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    // Serialize message field [i32_3]
    obj.i32_3.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    // Serialize message field [u32_1]
    obj.u32_1.forEach((val) => {
      bufferInfo = _serializer.uint32(val, bufferInfo);
    });
    // Serialize message field [u32_3]
    obj.u32_3.forEach((val) => {
      bufferInfo = _serializer.uint32(val, bufferInfo);
    });
    // Serialize message field [s_1]
    obj.s_1.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize message field [s_3]
    obj.s_3.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize message field [b_1]
    obj.b_1.forEach((val) => {
      bufferInfo = _serializer.bool(val, bufferInfo);
    });
    // Serialize message field [b_3]
    obj.b_3.forEach((val) => {
      bufferInfo = _serializer.bool(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TestFixedArray
    let tmp;
    let len;
    let data = new TestFixedArray();
    len = 1;
    // Deserialize message field [f32_1]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.f32_1[i] = tmp.data;
      buffer = tmp.buffer;
    }
    len = 3;
    // Deserialize message field [f32_3]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.f32_3[i] = tmp.data;
      buffer = tmp.buffer;
    }
    len = 1;
    // Deserialize message field [f64_1]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.f64_1[i] = tmp.data;
      buffer = tmp.buffer;
    }
    len = 3;
    // Deserialize message field [f64_3]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.f64_3[i] = tmp.data;
      buffer = tmp.buffer;
    }
    len = 1;
    // Deserialize message field [i8_1]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int8(buffer);
      data.i8_1[i] = tmp.data;
      buffer = tmp.buffer;
    }
    len = 3;
    // Deserialize message field [i8_3]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int8(buffer);
      data.i8_3[i] = tmp.data;
      buffer = tmp.buffer;
    }
    len = 1;
    // Deserialize message field [u8_1]
    data.u8_1 = buffer.slice(0, len);
    buffer =  buffer.slice(len);
    len = 3;
    // Deserialize message field [u8_3]
    data.u8_3 = buffer.slice(0, len);
    buffer =  buffer.slice(len);
    len = 1;
    // Deserialize message field [i32_1]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int32(buffer);
      data.i32_1[i] = tmp.data;
      buffer = tmp.buffer;
    }
    len = 3;
    // Deserialize message field [i32_3]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int32(buffer);
      data.i32_3[i] = tmp.data;
      buffer = tmp.buffer;
    }
    len = 1;
    // Deserialize message field [u32_1]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.uint32(buffer);
      data.u32_1[i] = tmp.data;
      buffer = tmp.buffer;
    }
    len = 3;
    // Deserialize message field [u32_3]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.uint32(buffer);
      data.u32_3[i] = tmp.data;
      buffer = tmp.buffer;
    }
    len = 1;
    // Deserialize message field [s_1]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.s_1[i] = tmp.data;
      buffer = tmp.buffer;
    }
    len = 3;
    // Deserialize message field [s_3]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.s_3[i] = tmp.data;
      buffer = tmp.buffer;
    }
    len = 1;
    // Deserialize message field [b_1]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.bool(buffer);
      data.b_1[i] = tmp.data;
      buffer = tmp.buffer;
    }
    len = 3;
    // Deserialize message field [b_3]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.bool(buffer);
      data.b_3[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rospy/TestFixedArray';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '1557473dc09f1a01a00123a713c822a7';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float32[1] f32_1
    float32[3] f32_3
    float64[1] f64_1
    float64[3] f64_3
    int8[1] i8_1
    int8[3] i8_3
    uint8[1] u8_1
    uint8[3] u8_3
    int32[1] i32_1
    int32[3] i32_3
    uint32[1] u32_1
    uint32[3] u32_3
    string[1] s_1
    string[3] s_3
    bool[1] b_1
    bool[3] b_3
    `;
  }

};

module.exports = TestFixedArray;
