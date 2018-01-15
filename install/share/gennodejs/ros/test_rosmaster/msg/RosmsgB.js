// Auto-generated. Do not edit!

// (in-package test_rosmaster.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Empty = require('./Empty.js');

//-----------------------------------------------------------

class RosmsgB {
  constructor() {
    this.empty = new Empty();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RosmsgB
    // Serialize message field [empty]
    bufferInfo = Empty.serialize(obj.empty, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type RosmsgB
    let tmp;
    let len;
    let data = new RosmsgB();
    // Deserialize message field [empty]
    tmp = Empty.deserialize(buffer);
    data.empty = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rosmaster/RosmsgB';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '6aac6c697d5414bc0fcede8c33981d0e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Empty empty
    
    ================================================================================
    MSG: test_rosmaster/Empty
    
    `;
  }

};

module.exports = RosmsgB;
