// Auto-generated. Do not edit!

// (in-package test_roslib_comm.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class ArrayOfMsgs {
  constructor() {
    this.strings = [];
    this.times = [];
    this.muls = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ArrayOfMsgs
    // Serialize the length for message field [strings]
    bufferInfo = _serializer.uint32(obj.strings.length, bufferInfo);
    // Serialize message field [strings]
    obj.strings.forEach((val) => {
      bufferInfo = std_msgs.msg.String.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [times]
    bufferInfo = _serializer.uint32(obj.times.length, bufferInfo);
    // Serialize message field [times]
    obj.times.forEach((val) => {
      bufferInfo = std_msgs.msg.Time.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [muls]
    bufferInfo = _serializer.uint32(obj.muls.length, bufferInfo);
    // Serialize message field [muls]
    obj.muls.forEach((val) => {
      bufferInfo = std_msgs.msg.MultiArrayLayout.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ArrayOfMsgs
    let tmp;
    let len;
    let data = new ArrayOfMsgs();
    // Deserialize array length for message field [strings]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [strings]
    data.strings = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = std_msgs.msg.String.deserialize(buffer);
      data.strings[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [times]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [times]
    data.times = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = std_msgs.msg.Time.deserialize(buffer);
      data.times[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [muls]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [muls]
    data.muls = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = std_msgs.msg.MultiArrayLayout.deserialize(buffer);
      data.muls[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'test_roslib_comm/ArrayOfMsgs';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '1f4cf3ffabe2555a0cfe19c974f01a01';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    std_msgs/String[] strings
    std_msgs/Time[] times
    std_msgs/MultiArrayLayout[] muls
    ================================================================================
    MSG: std_msgs/String
    string data
    
    ================================================================================
    MSG: std_msgs/Time
    time data
    
    ================================================================================
    MSG: std_msgs/MultiArrayLayout
    # The multiarray declares a generic multi-dimensional array of a
    # particular data type.  Dimensions are ordered from outer most
    # to inner most.
    
    MultiArrayDimension[] dim # Array of dimension properties
    uint32 data_offset        # padding elements at front of data
    
    # Accessors should ALWAYS be written in terms of dimension stride
    # and specified outer-most dimension first.
    # 
    # multiarray(i,j,k) = data[data_offset + dim_stride[1]*i + dim_stride[2]*j + k]
    #
    # A standard, 3-channel 640x480 image with interleaved color channels
    # would be specified as:
    #
    # dim[0].label  = "height"
    # dim[0].size   = 480
    # dim[0].stride = 3*640*480 = 921600  (note dim[0] stride is just size of image)
    # dim[1].label  = "width"
    # dim[1].size   = 640
    # dim[1].stride = 3*640 = 1920
    # dim[2].label  = "channel"
    # dim[2].size   = 3
    # dim[2].stride = 3
    #
    # multiarray(i,j,k) refers to the ith row, jth column, and kth channel.
    
    ================================================================================
    MSG: std_msgs/MultiArrayDimension
    string label   # label of given dimension
    uint32 size    # size of given dimension (in type units)
    uint32 stride  # stride of given dimension
    `;
  }

};

module.exports = ArrayOfMsgs;
