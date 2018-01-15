// Auto-generated. Do not edit!

// (in-package gps_common.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let GPSStatus = require('./GPSStatus.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class GPSFix {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.status = new GPSStatus();
    this.latitude = 0.0;
    this.longitude = 0.0;
    this.altitude = 0.0;
    this.track = 0.0;
    this.speed = 0.0;
    this.climb = 0.0;
    this.pitch = 0.0;
    this.roll = 0.0;
    this.dip = 0.0;
    this.time = 0.0;
    this.gdop = 0.0;
    this.pdop = 0.0;
    this.hdop = 0.0;
    this.vdop = 0.0;
    this.tdop = 0.0;
    this.err = 0.0;
    this.err_horz = 0.0;
    this.err_vert = 0.0;
    this.err_track = 0.0;
    this.err_speed = 0.0;
    this.err_climb = 0.0;
    this.err_time = 0.0;
    this.err_pitch = 0.0;
    this.err_roll = 0.0;
    this.err_dip = 0.0;
    this.position_covariance = new Array(9).fill(0);
    this.position_covariance_type = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GPSFix
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [status]
    bufferInfo = GPSStatus.serialize(obj.status, bufferInfo);
    // Serialize message field [latitude]
    bufferInfo = _serializer.float64(obj.latitude, bufferInfo);
    // Serialize message field [longitude]
    bufferInfo = _serializer.float64(obj.longitude, bufferInfo);
    // Serialize message field [altitude]
    bufferInfo = _serializer.float64(obj.altitude, bufferInfo);
    // Serialize message field [track]
    bufferInfo = _serializer.float64(obj.track, bufferInfo);
    // Serialize message field [speed]
    bufferInfo = _serializer.float64(obj.speed, bufferInfo);
    // Serialize message field [climb]
    bufferInfo = _serializer.float64(obj.climb, bufferInfo);
    // Serialize message field [pitch]
    bufferInfo = _serializer.float64(obj.pitch, bufferInfo);
    // Serialize message field [roll]
    bufferInfo = _serializer.float64(obj.roll, bufferInfo);
    // Serialize message field [dip]
    bufferInfo = _serializer.float64(obj.dip, bufferInfo);
    // Serialize message field [time]
    bufferInfo = _serializer.float64(obj.time, bufferInfo);
    // Serialize message field [gdop]
    bufferInfo = _serializer.float64(obj.gdop, bufferInfo);
    // Serialize message field [pdop]
    bufferInfo = _serializer.float64(obj.pdop, bufferInfo);
    // Serialize message field [hdop]
    bufferInfo = _serializer.float64(obj.hdop, bufferInfo);
    // Serialize message field [vdop]
    bufferInfo = _serializer.float64(obj.vdop, bufferInfo);
    // Serialize message field [tdop]
    bufferInfo = _serializer.float64(obj.tdop, bufferInfo);
    // Serialize message field [err]
    bufferInfo = _serializer.float64(obj.err, bufferInfo);
    // Serialize message field [err_horz]
    bufferInfo = _serializer.float64(obj.err_horz, bufferInfo);
    // Serialize message field [err_vert]
    bufferInfo = _serializer.float64(obj.err_vert, bufferInfo);
    // Serialize message field [err_track]
    bufferInfo = _serializer.float64(obj.err_track, bufferInfo);
    // Serialize message field [err_speed]
    bufferInfo = _serializer.float64(obj.err_speed, bufferInfo);
    // Serialize message field [err_climb]
    bufferInfo = _serializer.float64(obj.err_climb, bufferInfo);
    // Serialize message field [err_time]
    bufferInfo = _serializer.float64(obj.err_time, bufferInfo);
    // Serialize message field [err_pitch]
    bufferInfo = _serializer.float64(obj.err_pitch, bufferInfo);
    // Serialize message field [err_roll]
    bufferInfo = _serializer.float64(obj.err_roll, bufferInfo);
    // Serialize message field [err_dip]
    bufferInfo = _serializer.float64(obj.err_dip, bufferInfo);
    // Serialize message field [position_covariance]
    obj.position_covariance.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize message field [position_covariance_type]
    bufferInfo = _serializer.uint8(obj.position_covariance_type, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GPSFix
    let tmp;
    let len;
    let data = new GPSFix();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [status]
    tmp = GPSStatus.deserialize(buffer);
    data.status = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [latitude]
    tmp = _deserializer.float64(buffer);
    data.latitude = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [longitude]
    tmp = _deserializer.float64(buffer);
    data.longitude = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [altitude]
    tmp = _deserializer.float64(buffer);
    data.altitude = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [track]
    tmp = _deserializer.float64(buffer);
    data.track = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [speed]
    tmp = _deserializer.float64(buffer);
    data.speed = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [climb]
    tmp = _deserializer.float64(buffer);
    data.climb = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [pitch]
    tmp = _deserializer.float64(buffer);
    data.pitch = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [roll]
    tmp = _deserializer.float64(buffer);
    data.roll = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [dip]
    tmp = _deserializer.float64(buffer);
    data.dip = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [time]
    tmp = _deserializer.float64(buffer);
    data.time = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [gdop]
    tmp = _deserializer.float64(buffer);
    data.gdop = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [pdop]
    tmp = _deserializer.float64(buffer);
    data.pdop = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [hdop]
    tmp = _deserializer.float64(buffer);
    data.hdop = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [vdop]
    tmp = _deserializer.float64(buffer);
    data.vdop = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [tdop]
    tmp = _deserializer.float64(buffer);
    data.tdop = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [err]
    tmp = _deserializer.float64(buffer);
    data.err = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [err_horz]
    tmp = _deserializer.float64(buffer);
    data.err_horz = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [err_vert]
    tmp = _deserializer.float64(buffer);
    data.err_vert = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [err_track]
    tmp = _deserializer.float64(buffer);
    data.err_track = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [err_speed]
    tmp = _deserializer.float64(buffer);
    data.err_speed = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [err_climb]
    tmp = _deserializer.float64(buffer);
    data.err_climb = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [err_time]
    tmp = _deserializer.float64(buffer);
    data.err_time = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [err_pitch]
    tmp = _deserializer.float64(buffer);
    data.err_pitch = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [err_roll]
    tmp = _deserializer.float64(buffer);
    data.err_roll = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [err_dip]
    tmp = _deserializer.float64(buffer);
    data.err_dip = tmp.data;
    buffer = tmp.buffer;
    len = 9;
    // Deserialize message field [position_covariance]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.position_covariance[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [position_covariance_type]
    tmp = _deserializer.uint8(buffer);
    data.position_covariance_type = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'gps_common/GPSFix';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '3db3d0a7bc53054c67c528af84710b70';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # A more complete GPS fix to supplement sensor_msgs/NavSatFix.
    Header header
    
    GPSStatus status
    
    # Latitude (degrees). Positive is north of equator; negative is south.
    float64 latitude
    
    # Longitude (degrees). Positive is east of prime meridian, negative west.
    float64 longitude
    
    # Altitude (meters). Positive is above reference (e.g., sea level).
    float64 altitude
    
    # Direction (degrees from north)
    float64 track
    
    # Ground speed (meters/second)
    float64 speed
    
    # Vertical speed (meters/second)
    float64 climb
    
    # Device orientation (units in degrees)
    float64 pitch
    float64 roll
    float64 dip
    
    # GPS time
    float64 time
    
    ## Dilution of precision; Xdop<=0 means the value is unknown
    
    # Total (positional-temporal) dilution of precision
    float64 gdop
    
    # Positional (3D) dilution of precision
    float64 pdop
    
    # Horizontal dilution of precision
    float64 hdop
    
    # Vertical dilution of precision
    float64 vdop
    
    # Temporal dilution of precision
    float64 tdop
    
    ## Uncertainty of measurement, 95% confidence
    
    # Spherical position uncertainty (meters) [epe]
    float64 err
    
    # Horizontal position uncertainty (meters) [eph]
    float64 err_horz
    
    # Vertical position uncertainty (meters) [epv]
    float64 err_vert
    
    # Track uncertainty (degrees) [epd]
    float64 err_track
    
    # Ground speed uncertainty (meters/second) [eps]
    float64 err_speed
    
    # Vertical speed uncertainty (meters/second) [epc]
    float64 err_climb
    
    # Temporal uncertainty [ept]
    float64 err_time
    
    # Orientation uncertainty (degrees)
    float64 err_pitch
    float64 err_roll
    float64 err_dip
    
    # Position covariance [m^2] defined relative to a tangential plane
    # through the reported position. The components are East, North, and
    # Up (ENU), in row-major order.
    
    float64[9] position_covariance
    
    uint8 COVARIANCE_TYPE_UNKNOWN = 0
    uint8 COVARIANCE_TYPE_APPROXIMATED = 1
    uint8 COVARIANCE_TYPE_DIAGONAL_KNOWN = 2
    uint8 COVARIANCE_TYPE_KNOWN = 3
    
    uint8 position_covariance_type
    
    
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
    
    ================================================================================
    MSG: gps_common/GPSStatus
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
    
    
    `;
  }

};

// Constants for message
GPSFix.Constants = {
  COVARIANCE_TYPE_UNKNOWN: 0,
  COVARIANCE_TYPE_APPROXIMATED: 1,
  COVARIANCE_TYPE_DIAGONAL_KNOWN: 2,
  COVARIANCE_TYPE_KNOWN: 3,
}

module.exports = GPSFix;
