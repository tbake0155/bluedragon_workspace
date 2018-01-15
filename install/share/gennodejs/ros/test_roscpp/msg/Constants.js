// Auto-generated. Do not edit!

// (in-package test_roscpp.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Constants {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Constants
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Constants
    let tmp;
    let len;
    let data = new Constants();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_roscpp/Constants';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '0032309c8dd2c569e0e0d0e75974e750';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    uint8 a = 1
    int8 b = 2
    uint16 c = 3
    int16 d = 4
    uint32 e = 5
    int32 f = 6
    uint64 g = 7
    int64 h = 8
    float32 fa = 1.5
    float64 fb = 40.9
    string str = hello there
    string str2 = this string has "quotes" and \slashes\ in it
    `;
  }

};

// Constants for message
Constants.Constants = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  FA: 1.5,
  FB: 40.9,
  STR: 'hello there',
  STR2: 'this string has "quotes" and \slashes\ in it',
}

module.exports = Constants;
