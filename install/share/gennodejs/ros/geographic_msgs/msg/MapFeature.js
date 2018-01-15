// Auto-generated. Do not edit!

// (in-package geographic_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let KeyValue = require('./KeyValue.js');
let uuid_msgs = _finder('uuid_msgs');

//-----------------------------------------------------------

class MapFeature {
  constructor() {
    this.id = new uuid_msgs.msg.UniqueID();
    this.components = [];
    this.props = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type MapFeature
    // Serialize message field [id]
    bufferInfo = uuid_msgs.msg.UniqueID.serialize(obj.id, bufferInfo);
    // Serialize the length for message field [components]
    bufferInfo = _serializer.uint32(obj.components.length, bufferInfo);
    // Serialize message field [components]
    obj.components.forEach((val) => {
      bufferInfo = uuid_msgs.msg.UniqueID.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [props]
    bufferInfo = _serializer.uint32(obj.props.length, bufferInfo);
    // Serialize message field [props]
    obj.props.forEach((val) => {
      bufferInfo = KeyValue.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type MapFeature
    let tmp;
    let len;
    let data = new MapFeature();
    // Deserialize message field [id]
    tmp = uuid_msgs.msg.UniqueID.deserialize(buffer);
    data.id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [components]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [components]
    data.components = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = uuid_msgs.msg.UniqueID.deserialize(buffer);
      data.components[i] = tmp.data;
      buffer = tmp.buffer;
    }
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
    return 'geographic_msgs/MapFeature';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e2505ace5e8da8a15b610eaf62bdefae';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Geographic map feature.
    #
    # A list of WayPoint IDs for features like streets, highways, hiking
    # trails, the outlines of buildings and parking lots in sequential
    # order.
    #
    # Feature lists may also contain other feature lists as members.
    
    uuid_msgs/UniqueID   id         # Unique feature identifier
    uuid_msgs/UniqueID[] components # Sequence of feature components
    KeyValue[] props                # Key/value properties for this feature
    
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

module.exports = MapFeature;
