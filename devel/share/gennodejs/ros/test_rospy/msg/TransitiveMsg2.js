// Auto-generated. Do not edit!

// (in-package test_rospy.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let test_rosmaster = _finder('test_rosmaster');

//-----------------------------------------------------------

class TransitiveMsg2 {
  constructor() {
    this.data = new test_rosmaster.msg.Composite();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TransitiveMsg2
    // Serialize message field [data]
    bufferInfo = test_rosmaster.msg.Composite.serialize(obj.data, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TransitiveMsg2
    let tmp;
    let len;
    let data = new TransitiveMsg2();
    // Deserialize message field [data]
    tmp = test_rosmaster.msg.Composite.deserialize(buffer);
    data.data = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_rospy/TransitiveMsg2';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'eb1fa3c8b51b0e31f74e89c2eecc441e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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

module.exports = TransitiveMsg2;
