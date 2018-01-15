// Auto-generated. Do not edit!

// (in-package robot_pose_ekf.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class GetStatusRequest {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetStatusRequest
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetStatusRequest
    let tmp;
    let len;
    let data = new GetStatusRequest();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'robot_pose_ekf/GetStatusRequest';
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

class GetStatusResponse {
  constructor() {
    this.status = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetStatusResponse
    // Serialize message field [status]
    bufferInfo = _serializer.string(obj.status, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetStatusResponse
    let tmp;
    let len;
    let data = new GetStatusResponse();
    // Deserialize message field [status]
    tmp = _deserializer.string(buffer);
    data.status = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'robot_pose_ekf/GetStatusResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '4fe5af303955c287688e7347e9b00278';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string status
    
    `;
  }

};

module.exports = {
  Request: GetStatusRequest,
  Response: GetStatusResponse
};
