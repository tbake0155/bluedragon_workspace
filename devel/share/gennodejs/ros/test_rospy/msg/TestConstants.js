// Auto-generated. Do not edit!

// (in-package test_rospy.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class TestConstants {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TestConstants
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TestConstants
    let tmp;
    let len;
    let data = new TestConstants();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rospy/TestConstants';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e60959d2ccf9718dc5e42767bebd1644';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float32 A=-123.0
    float32 B=124.0
    float64 C=125.0
    int32 X=123
    int32 Y=-123
    uint32 Z=124
    string FOO=foo
    string SINGLEQUOTE='hi
    string DOUBLEQUOTE="hello" there
    string MULTIQUOTE="hello" 'goodbye'
    string EXAMPLE="#comments" are ignored, and leading and trailing whitespace removed
    string WHITESPACE= strip  
    string EMPTY= 
    bool TRUE=1
    bool FALSE=0
    `;
  }

};

// Constants for message
TestConstants.Constants = {
  A: -123.0,
  B: 124.0,
  C: 125.0,
  X: 123,
  Y: -123,
  Z: 124,
  FOO: 'foo',
  SINGLEQUOTE: ''hi',
  DOUBLEQUOTE: '"hello" there',
  MULTIQUOTE: '"hello" 'goodbye'',
  EXAMPLE: '"#comments" are ignored, and leading and trailing whitespace removed',
  WHITESPACE: 'strip',
  EMPTY: '',
  TRUE: True,
  FALSE: False,
}

module.exports = TestConstants;
