// Auto-generated. Do not edit!

// (in-package base_local_planner.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Position2DInt {
  constructor() {
    this.x = 0;
    this.y = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Position2DInt
    // Serialize message field [x]
    bufferInfo = _serializer.int64(obj.x, bufferInfo);
    // Serialize message field [y]
    bufferInfo = _serializer.int64(obj.y, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Position2DInt
    let tmp;
    let len;
    let data = new Position2DInt();
    // Deserialize message field [x]
    tmp = _deserializer.int64(buffer);
    data.x = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [y]
    tmp = _deserializer.int64(buffer);
    data.y = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'base_local_planner/Position2DInt';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '3b834ede922a0fff22c43585c533b49f';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int64 x
    int64 y
    `;
  }

};

module.exports = Position2DInt;
