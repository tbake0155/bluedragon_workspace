// Auto-generated. Do not edit!

// (in-package navfn.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class SetCostmapRequest {
  constructor() {
    this.costs = [];
    this.height = 0;
    this.width = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetCostmapRequest
    // Serialize the length for message field [costs]
    bufferInfo = _serializer.uint32(obj.costs.length, bufferInfo);
    // Serialize message field [costs]
    bufferInfo.buffer.push(obj.costs);
    bufferInfo.length += obj.costs.length;
    // Serialize message field [height]
    bufferInfo = _serializer.uint16(obj.height, bufferInfo);
    // Serialize message field [width]
    bufferInfo = _serializer.uint16(obj.width, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetCostmapRequest
    let tmp;
    let len;
    let data = new SetCostmapRequest();
    // Deserialize array length for message field [costs]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [costs]
    data.costs = buffer.slice(0, len);
    buffer =  buffer.slice(len);
    // Deserialize message field [height]
    tmp = _deserializer.uint16(buffer);
    data.height = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [width]
    tmp = _deserializer.uint16(buffer);
    data.width = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'navfn/SetCostmapRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '370ec969cdb71f9cde7c7cbe0d752308';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    uint8[] costs
    uint16 height
    uint16 width
    
    `;
  }

};

class SetCostmapResponse {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetCostmapResponse
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetCostmapResponse
    let tmp;
    let len;
    let data = new SetCostmapResponse();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'navfn/SetCostmapResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd41d8cd98f00b204e9800998ecf8427e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    `;
  }

};

module.exports = {
  Request: SetCostmapRequest,
  Response: SetCostmapResponse
};
