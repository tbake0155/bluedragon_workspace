// Auto-generated. Do not edit!

// (in-package geographic_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let KeyValue = require('./KeyValue.js');
let uuid_msgs = _finder('uuid_msgs');

//-----------------------------------------------------------

class RouteSegment {
  constructor() {
    this.id = new uuid_msgs.msg.UniqueID();
    this.start = new uuid_msgs.msg.UniqueID();
    this.end = new uuid_msgs.msg.UniqueID();
    this.props = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RouteSegment
    // Serialize message field [id]
    bufferInfo = uuid_msgs.msg.UniqueID.serialize(obj.id, bufferInfo);
    // Serialize message field [start]
    bufferInfo = uuid_msgs.msg.UniqueID.serialize(obj.start, bufferInfo);
    // Serialize message field [end]
    bufferInfo = uuid_msgs.msg.UniqueID.serialize(obj.end, bufferInfo);
    // Serialize the length for message field [props]
    bufferInfo = _serializer.uint32(obj.props.length, bufferInfo);
    // Serialize message field [props]
    obj.props.forEach((val) => {
      bufferInfo = KeyValue.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type RouteSegment
    let tmp;
    let len;
    let data = new RouteSegment();
    // Deserialize message field [id]
    tmp = uuid_msgs.msg.UniqueID.deserialize(buffer);
    data.id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [start]
    tmp = uuid_msgs.msg.UniqueID.deserialize(buffer);
    data.start = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [end]
    tmp = uuid_msgs.msg.UniqueID.deserialize(buffer);
    data.end = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [props]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [props]
    data.props = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = KeyValue.deserialize(buffer);
      data.props[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'geographic_msgs/RouteSegment';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '8583d1e2ddf1891c3934a5d2ed9a799c';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Route network segment.
    #
    # This is one directed edge of a RouteNetwork graph. It represents a
    # known path from one way point to another.  If the path is two-way,
    # there will be another RouteSegment with "start" and "end" reversed.
    
    uuid_msgs/UniqueID id           # Unique identifier for this segment
    
    uuid_msgs/UniqueID start        # beginning way point of segment
    uuid_msgs/UniqueID end          # ending way point of segment
    
    KeyValue[] props                # segment properties
    
    ================================================================================
    MSG: uuid_msgs/UniqueID
    # A universally unique identifier (UUID).
    #
    #  http://en.wikipedia.org/wiki/Universally_unique_identifier
    #  http://tools.ietf.org/html/rfc4122.html
    
    uint8[16] uuid
    
    ================================================================================
    MSG: geographic_msgs/KeyValue
    # Geographic map tag (key, value) pair
    #
    # This is equivalent to diagnostic_msgs/KeyValue, repeated here to
    # avoid introducing a trivial stack dependency.
    
    string key                     # tag label
    string value                   # corresponding value
    
    `;
  }

};

module.exports = RouteSegment;
