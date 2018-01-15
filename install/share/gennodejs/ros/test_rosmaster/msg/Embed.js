// Auto-generated. Do not edit!

// (in-package test_rosmaster.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Simple = require('./Simple.js');
let Arrays = require('./Arrays.js');

//-----------------------------------------------------------

class Embed {
  constructor() {
    this.simple = new Simple();
    this.arrays = new Arrays();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Embed
    // Serialize message field [simple]
    bufferInfo = Simple.serialize(obj.simple, bufferInfo);
    // Serialize message field [arrays]
    bufferInfo = Arrays.serialize(obj.arrays, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Embed
    let tmp;
    let len;
    let data = new Embed();
    // Deserialize message field [simple]
    tmp = Simple.deserialize(buffer);
    data.simple = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [arrays]
    tmp = Arrays.deserialize(buffer);
    data.arrays = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rosmaster/Embed';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '6dec891298f3675c2d964c161d28efaa';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    #for rostopic tests
    Simple simple
    Arrays arrays
    
    ================================================================================
    MSG: test_rosmaster/Simple
    # for rostopic tests
    byte b
    int16 int16
    int32 int32
    int64 int64
    char c
    uint16 uint16
    uint32 uint32
    uint64 uint64
    string str
    
    ================================================================================
    MSG: test_rosmaster/Arrays
    #for rostopic tests
    int8[] int8_arr
    uint8[] uint8_arr
    int32[] int32_arr
    uint32[] uint32_arr
    string[] string_arr
    time[] time_arr
    
    `;
  }

};

module.exports = Embed;
