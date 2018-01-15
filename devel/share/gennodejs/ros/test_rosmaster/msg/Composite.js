// Auto-generated. Do not edit!

// (in-package test_rosmaster.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let CompositeA = require('./CompositeA.js');
let CompositeB = require('./CompositeB.js');

//-----------------------------------------------------------

class Composite {
  constructor() {
    this.a = new CompositeA();
    this.b = new CompositeB();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Composite
    // Serialize message field [a]
    bufferInfo = CompositeA.serialize(obj.a, bufferInfo);
    // Serialize message field [b]
    bufferInfo = CompositeB.serialize(obj.b, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Composite
    let tmp;
    let len;
    let data = new Composite();
    // Deserialize message field [a]
    tmp = CompositeA.deserialize(buffer);
    data.a = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [b]
    tmp = CompositeB.deserialize(buffer);
    data.b = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rosmaster/Composite';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd8fb6eb869ad3956b50e8737d96dc9fa';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # composite message. required for testing import calculation in generators
    CompositeA a
    CompositeB b
    
    ================================================================================
    MSG: test_rosmaster/CompositeA
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
    ================================================================================
    MSG: test_rosmaster/CompositeB
    # copy of geometry_msgs/Point for testing
    float64 x
    float64 y
    float64 z
    
    `;
  }

};

module.exports = Composite;
