// Auto-generated. Do not edit!

// (in-package test_rospy.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let TransitiveMsg1 = require('../msg/TransitiveMsg1.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class TransitiveSrvRequest {
  constructor() {
    this.msg = new TransitiveMsg1();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TransitiveSrvRequest
    // Serialize message field [msg]
    bufferInfo = TransitiveMsg1.serialize(obj.msg, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TransitiveSrvRequest
    let tmp;
    let len;
    let data = new TransitiveSrvRequest();
    // Deserialize message field [msg]
    tmp = TransitiveMsg1.deserialize(buffer);
    data.msg = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'test_rospy/TransitiveSrvRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c9627b8665f2e2514f3d19406d2ed17d';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    test_rospy/TransitiveMsg1 msg
    
    ================================================================================
    MSG: test_rospy/TransitiveMsg1
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

class TransitiveSrvResponse {
  constructor() {
    this.a = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TransitiveSrvResponse
    // Serialize message field [a]
    bufferInfo = _serializer.int32(obj.a, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TransitiveSrvResponse
    let tmp;
    let len;
    let data = new TransitiveSrvResponse();
    // Deserialize message field [a]
    tmp = _deserializer.int32(buffer);
    data.a = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'test_rospy/TransitiveSrvResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '5c9fb1a886e81e3162a5c87bf55c072b';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 a
    
    
    
    `;
  }

};

module.exports = {
  Request: TransitiveSrvRequest,
  Response: TransitiveSrvResponse
};
