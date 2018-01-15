// Auto-generated. Do not edit!

// (in-package test_roscpp.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class LatencyMessage {
  constructor() {
    this.publish_time = 0.0;
    this.receipt_time = 0.0;
    this.count = 0;
    this.thread_index = 0;
    this.array = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type LatencyMessage
    // Serialize message field [publish_time]
    bufferInfo = _serializer.float64(obj.publish_time, bufferInfo);
    // Serialize message field [receipt_time]
    bufferInfo = _serializer.float64(obj.receipt_time, bufferInfo);
    // Serialize message field [count]
    bufferInfo = _serializer.uint64(obj.count, bufferInfo);
    // Serialize message field [thread_index]
    bufferInfo = _serializer.uint32(obj.thread_index, bufferInfo);
    // Serialize the length for message field [array]
    bufferInfo = _serializer.uint32(obj.array.length, bufferInfo);
    // Serialize message field [array]
    bufferInfo.buffer.push(obj.array);
    bufferInfo.length += obj.array.length;
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type LatencyMessage
    let tmp;
    let len;
    let data = new LatencyMessage();
    // Deserialize message field [publish_time]
    tmp = _deserializer.float64(buffer);
    data.publish_time = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [receipt_time]
    tmp = _deserializer.float64(buffer);
    data.receipt_time = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [count]
    tmp = _deserializer.uint64(buffer);
    data.count = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [thread_index]
    tmp = _deserializer.uint32(buffer);
    data.thread_index = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [array]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [array]
    data.array = buffer.slice(0, len);
    buffer =  buffer.slice(len);
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_roscpp/LatencyMessage';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'be90d117303321f392404ed7edeb7c8c';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float64 publish_time
    float64 receipt_time
    uint64 count
    uint32 thread_index
    uint8[] array
    
    
    `;
  }

};

module.exports = LatencyMessage;
