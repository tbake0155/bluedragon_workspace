// Auto-generated. Do not edit!

// (in-package geographic_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class KeyValue {
  constructor() {
    this.key = '';
    this.value = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type KeyValue
    // Serialize message field [key]
    bufferInfo = _serializer.string(obj.key, bufferInfo);
    // Serialize message field [value]
    bufferInfo = _serializer.string(obj.value, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type KeyValue
    let tmp;
    let len;
    let data = new KeyValue();
    // Deserialize message field [key]
    tmp = _deserializer.string(buffer);
    data.key = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [value]
    tmp = _deserializer.string(buffer);
    data.value = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'geographic_msgs/KeyValue';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'cf57fdc6617a881a88c16e768132149c';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Geographic map tag (key, value) pair
    #
    # This is equivalent to diagnostic_msgs/KeyValue, repeated here to
    # avoid introducing a trivial stack dependency.
    
    string key                     # tag label
    string value                   # corresponding value
    
    `;
  }

};

module.exports = KeyValue;
