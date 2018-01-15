// Auto-generated. Do not edit!

// (in-package gps_common.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class GPSStatus {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.satellites_used = 0;
    this.satellite_used_prn = [];
    this.satellites_visible = 0;
    this.satellite_visible_prn = [];
    this.satellite_visible_z = [];
    this.satellite_visible_azimuth = [];
    this.satellite_visible_snr = [];
    this.status = 0;
    this.motion_source = 0;
    this.orientation_source = 0;
    this.position_source = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GPSStatus
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [satellites_used]
    bufferInfo = _serializer.uint16(obj.satellites_used, bufferInfo);
    // Serialize the length for message field [satellite_used_prn]
    bufferInfo = _serializer.uint32(obj.satellite_used_prn.length, bufferInfo);
    // Serialize message field [satellite_used_prn]
    obj.satellite_used_prn.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    // Serialize message field [satellites_visible]
    bufferInfo = _serializer.uint16(obj.satellites_visible, bufferInfo);
    // Serialize the length for message field [satellite_visible_prn]
    bufferInfo = _serializer.uint32(obj.satellite_visible_prn.length, bufferInfo);
    // Serialize message field [satellite_visible_prn]
    obj.satellite_visible_prn.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    // Serialize the length for message field [satellite_visible_z]
    bufferInfo = _serializer.uint32(obj.satellite_visible_z.length, bufferInfo);
    // Serialize message field [satellite_visible_z]
    obj.satellite_visible_z.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    // Serialize the length for message field [satellite_visible_azimuth]
    bufferInfo = _serializer.uint32(obj.satellite_visible_azimuth.length, bufferInfo);
    // Serialize message field [satellite_visible_azimuth]
    obj.satellite_visible_azimuth.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    // Serialize the length for message field [satellite_visible_snr]
    bufferInfo = _serializer.uint32(obj.satellite_visible_snr.length, bufferInfo);
    // Serialize message field [satellite_visible_snr]
    obj.satellite_visible_snr.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    // Serialize message field [status]
    bufferInfo = _serializer.int16(obj.status, bufferInfo);
    // Serialize message field [motion_source]
    bufferInfo = _serializer.uint16(obj.motion_source, bufferInfo);
    // Serialize message field [orientation_source]
    bufferInfo = _serializer.uint16(obj.orientation_source, bufferInfo);
    // Serialize message field [position_source]
    bufferInfo = _serializer.uint16(obj.position_source, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GPSStatus
    let tmp;
    let len;
    let data = new GPSStatus();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [satellites_used]
    tmp = _deserializer.uint16(buffer);
    data.satellites_used = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [satellite_used_prn]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [satellite_used_prn]
    data.satellite_used_prn = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int32(buffer);
      data.satellite_used_prn[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [satellites_visible]
    tmp = _deserializer.uint16(buffer);
    data.satellites_visible = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [satellite_visible_prn]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [satellite_visible_prn]
    data.satellite_visible_prn = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int32(buffer);
      data.satellite_visible_prn[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [satellite_visible_z]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [satellite_visible_z]
    data.satellite_visible_z = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int32(buffer);
      data.satellite_visible_z[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [satellite_visible_azimuth]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [satellite_visible_azimuth]
    data.satellite_visible_azimuth = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int32(buffer);
      data.satellite_visible_azimuth[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [satellite_visible_snr]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [satellite_visible_snr]
    data.satellite_visible_snr = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int32(buffer);
      data.satellite_visible_snr[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [status]
    tmp = _deserializer.int16(buffer);
    data.status = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [motion_source]
    tmp = _deserializer.uint16(buffer);
    data.motion_source = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [orientation_source]
    tmp = _deserializer.uint16(buffer);
    data.orientation_source = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [position_source]
    tmp = _deserializer.uint16(buffer);
    data.position_source = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'gps_common/GPSStatus';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '313baa8951fdd056c78bf61b1b07d249';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    
    # Satellites used in solution
    uint16 satellites_used # Number of satellites
    int32[] satellite_used_prn # PRN identifiers
    
    # Satellites visible
    uint16 satellites_visible
    int32[] satellite_visible_prn # PRN identifiers
    int32[] satellite_visible_z # Elevation of satellites
    int32[] satellite_visible_azimuth # Azimuth of satellites
    int32[] satellite_visible_snr # Signal-to-noise ratios (dB)
    
    # Measurement status
    int16 STATUS_NO_FIX=-1   # Unable to fix position
    int16 STATUS_FIX=0       # Normal fix
    int16 STATUS_SBAS_FIX=1  # Fixed using a satellite-based augmentation system
    int16 STATUS_GBAS_FIX=2  #          or a ground-based augmentation system
    int16 STATUS_DGPS_FIX=18 # Fixed with DGPS
    int16 STATUS_WAAS_FIX=33 # Fixed with WAAS
    int16 status
    
    uint16 SOURCE_NONE=0 # No information is available
    uint16 SOURCE_GPS=1 # Using standard GPS location [only valid for position_source]
    uint16 SOURCE_POINTS=2 # Motion/orientation fix is derived from successive points
    uint16 SOURCE_DOPPLER=4 # Motion is derived using the Doppler effect
    uint16 SOURCE_ALTIMETER=8 # Using an altimeter
    uint16 SOURCE_MAGNETIC=16 # Using magnetic sensors
    uint16 SOURCE_GYRO=32 # Using gyroscopes
    uint16 SOURCE_ACCEL=64 # Using accelerometers
    
    uint16 motion_source # Source for speed, climb and track
    uint16 orientation_source # Source for device orientation
    uint16 position_source # Source for position
    
    
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    # 0: no frame
    # 1: global frame
    string frame_id
    
    `;
  }

};

// Constants for message
GPSStatus.Constants = {
  STATUS_NO_FIX: -1,
  STATUS_FIX: 0,
  STATUS_SBAS_FIX: 1,
  STATUS_GBAS_FIX: 2,
  STATUS_DGPS_FIX: 18,
  STATUS_WAAS_FIX: 33,
  SOURCE_NONE: 0,
  SOURCE_GPS: 1,
  SOURCE_POINTS: 2,
  SOURCE_DOPPLER: 4,
  SOURCE_ALTIMETER: 8,
  SOURCE_MAGNETIC: 16,
  SOURCE_GYRO: 32,
  SOURCE_ACCEL: 64,
}

module.exports = GPSStatus;
