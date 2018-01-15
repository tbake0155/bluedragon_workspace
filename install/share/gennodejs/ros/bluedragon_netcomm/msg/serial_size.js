// Auto-generated. Do not edit!

// (in-package bluedragon_netcomm.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class serial_size {
  constructor() {
    this.pr_serial_size = 0;
    this.no_serial_size = 0;
    this.ls_serial_size = 0;
    this.tf_serial_size = 0;
    this.ra_serial_size = 0;
    this.od_serial_size = 0;
    this.ma_serial_size = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type serial_size
    // Serialize message field [pr_serial_size]
    bufferInfo = _serializer.int32(obj.pr_serial_size, bufferInfo);
    // Serialize message field [no_serial_size]
    bufferInfo = _serializer.int32(obj.no_serial_size, bufferInfo);
    // Serialize message field [ls_serial_size]
    bufferInfo = _serializer.int32(obj.ls_serial_size, bufferInfo);
    // Serialize message field [tf_serial_size]
    bufferInfo = _serializer.int32(obj.tf_serial_size, bufferInfo);
    // Serialize message field [ra_serial_size]
    bufferInfo = _serializer.int32(obj.ra_serial_size, bufferInfo);
    // Serialize message field [od_serial_size]
    bufferInfo = _serializer.int32(obj.od_serial_size, bufferInfo);
    // Serialize message field [ma_serial_size]
    bufferInfo = _serializer.int32(obj.ma_serial_size, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type serial_size
    let tmp;
    let len;
    let data = new serial_size();
    // Deserialize message field [pr_serial_size]
    tmp = _deserializer.int32(buffer);
    data.pr_serial_size = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [no_serial_size]
    tmp = _deserializer.int32(buffer);
    data.no_serial_size = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ls_serial_size]
    tmp = _deserializer.int32(buffer);
    data.ls_serial_size = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [tf_serial_size]
    tmp = _deserializer.int32(buffer);
    data.tf_serial_size = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ra_serial_size]
    tmp = _deserializer.int32(buffer);
    data.ra_serial_size = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [od_serial_size]
    tmp = _deserializer.int32(buffer);
    data.od_serial_size = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ma_serial_size]
    tmp = _deserializer.int32(buffer);
    data.ma_serial_size = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'bluedragon_netcomm/serial_size';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '4ae69dddfb963b4406ee9199a82f29d0';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    int32 pr_serial_size
    int32 no_serial_size
    int32 ls_serial_size
    int32 tf_serial_size
    int32 ra_serial_size
    int32 od_serial_size
    int32 ma_serial_size
    
    `;
  }

};

module.exports = serial_size;
