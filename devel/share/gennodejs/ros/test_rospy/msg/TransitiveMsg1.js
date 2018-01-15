// Auto-generated. Do not edit!

// (in-package test_rospy.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let TransitiveMsg2 = require('./TransitiveMsg2.js');

//-----------------------------------------------------------

class TransitiveMsg1 {
  constructor() {
    this.msg2 = new TransitiveMsg2();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TransitiveMsg1
    // Serialize message field [msg2]
    bufferInfo = TransitiveMsg2.serialize(obj.msg2, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TransitiveMsg1
    let tmp;
    let len;
    let data = new TransitiveMsg1();
    // Deserialize message field [msg2]
    tmp = TransitiveMsg2.deserialize(buffer);
    data.msg2 = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rospy/TransitiveMsg1';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '72751523a989ee2c7a44c006464315e9';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    TransitiveMsg2 msg2
    
    
    ================================================================================
    MSG: test_rospy/TransitiveMsg2
    test_rosmaster/Composite data
    
    ================================================================================
    MSG: test_rosmaster/Composite
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

module.exports = TransitiveMsg1;
